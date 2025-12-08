
import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react'; // 모든 타입을 분리
import { classNames } from '@shared/utils/classNames';
// SCSS 파일에 정의된 클래스는 전역으로 사용되거나, 여기에 직접 임포트하여 사용됩니다.

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * 컨테이너에 추가할 커스텀 스타일 클래스
   */
  className?: string;
}

/**
 * PC 960px 중앙 정렬 및 반응형 여백을 담당하는 레이아웃 컨테이너
 * 모든 페이지 콘텐츠는 이 컴포넌트 내부에 배치되어야 합니다.
 */
const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    // 'container'는 src/styles/components/_layout.scss에 정의된 중앙 정렬 클래스입니다.
    // classNames를 사용하여 기본 'container' 클래스와 외부에서 전달된 'className'을 병합합니다.
    <div className={classNames('container', className)} {...props}>
      {children}
    </div>
  );
};

export default Container;