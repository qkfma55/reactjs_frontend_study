
import type { ComponentPropsWithRef } from 'react'; // 오직 타입스크립트의 컴파일 시점에만 실행.오직 타입정의 역할.
// 해당 요소가 interface, type, class의 타입정의로 사용된다면, import type을 사용. 이는, 불필요한 번들링 방지, 구조 안정성(런타임 의존성↓), 명확한 의도 표시
import { forwardRef } from 'react'; // javascript 런타이에 실행되는 값. 브라우저에서 실행됨.
import { classNames } from '@shared/utils/classNames';
// SCSS 파일에 정의된 클래스는 전역으로 사용되거나, 여기에 직접 임포트하여 사용됩니다.

interface ContainerProps extends ComponentPropsWithRef<'div'> {
  // ComponentPropsWithRef<'div'>: div 태그가 가질 수 있는 기본적인 속성 (onClick, className, style, id 등)과 더불어 ref 속성까지 포함하여 가져오겠다
  // ComponentProps만 가져올 경우 ref를 제외한 값을 가져옴.
  // extends: 속성을 상속받아 ContainerProps로 확장한다는 뜻.
  // ContainerProps는 div의 모든 요소를 물려받고 필요하면 추가속성을 더 정의할 수 있게 됨.
  
  /**
   * 컨테이너에 추가할 커스텀 스타일 클래스
   */
  className?: string;
  // ref는 자동으로 포함되므로, 별도로 정의하지 않아도 됩니다.
}

/**
 * PC 960px 중앙 정렬 및 반응형 여백을 담당하는 레이아웃 컨테이너
 * 모든 페이지 콘텐츠는 이 컴포넌트 내부에 배치되어야 합니다.
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>( // 부모 컴포넌트에서 요소를 받아서 실제 DOM요소에 연결.
  ({ className, children, ...props }, ref) => { // ref를 두 번째 인수로 받습니다.
    
    return (
      <div 
        ref={ref} // 🌟 전달받은 ref를 내부 div에 연결합니다.
        className={classNames('container', className)} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

// 컴포넌트의 디버깅 이름을 설정 (실무 관행)
Container.displayName = 'Container';

export default Container;

/*
기타 : ref.current.innerHTML 를 사용하는 경우 XSS(크로스 사이트 스크립팅)의 위험에 노출될 수 있으므로,
ref를 사용하는 대신, useState를 변경하는 방법이 좀 더 안전함.
ref (사용자 입력 값 그대로 DOM 삽입), useState (React가 자동 이스케이프 처리)
ref를 사용해야 하는 경우 :
innerHTML 대신 textContent 속성을 사용해야 안전함.
  // ❌ 위험! HTML 태그가 그대로 실행될 수 있음.
  divRef.current.innerHTML = userInput; 
  // ⭐️ 안전! HTML 태그는 무시하고 순수한 텍스트만 삽입.
  divRef.current.textContent = userInput;
useState/props - 매우 안전
ref.current.textContent - 안전
ref.current.innerHTML - 매우 취약
*/