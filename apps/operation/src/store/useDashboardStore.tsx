import create from 'zustand';

// Zustand 스토어의 상태와 액션 타입 정의
interface DashboardState {
  currentPage: number;
  totalItems: number;
  setCurrentPage: (page: number) => void;
  handlePageChange: (page: number, pageSize?: number) => void;
}

// Zustand 스토어 생성
const useDashboardStore = create<DashboardState>((set) => ({
  currentPage: 1,
  totalItems: 100,
  setCurrentPage: (page) => set({ currentPage: page }),
  handlePageChange: (page, pageSize) => {
    set({ currentPage: page });
    console.log(`페이지 ${page} (페이지 크기: ${pageSize})`);
  },
}));

export default useDashboardStore;
