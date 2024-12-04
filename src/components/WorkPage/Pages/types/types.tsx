export interface WorkContentItem {
    id: number | string;
    period: string;
    imgSrc: string;
    title: string;
    link: string;
    interior?: boolean; // 이 부분 확인
}