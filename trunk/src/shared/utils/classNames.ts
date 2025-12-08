// src/shared/utils/classNames.ts (classnames 라이브러리 대체)

type ClassName = string | null | undefined | boolean;

/**
 * 여러 클래스 이름을 조건부로 결합하는 유틸리티 함수 (실제 classnames 라이브러리의 역할을 대신합니다.)
 * @param args - 결합할 클래스 이름들
 * @returns 결합된 문자열 클래스
 */
export const classNames = (...args: ClassName[]): string => {
  return args
    .filter(Boolean)
    .join(' ');
};