import { v4 } from 'uuid';

export const data = {
  user: {
    userId: v4(),
    board: {
      boardId: v4(),
      path: '',
      name: '',
      columnStatus: [
        {
          columnId: v4(),
          name: 'В очереди',
          status: 'queue',
          taskCard: {
            // id: '',
            // taskNumber: '',
            // title: '',
            // priority: '',
            // currentStatus: '',
            // description: '',
            // createDate: '',
            // endDate: '',
          },
        },
        {
          columnId: v4(),
          name: 'В разработке',
          status: 'development',
          taskCard: {
            // id: '',
            // taskNumber: '',
            // title: '',
            // priority: '',
            // currentStatus: '',
            // description: '',
            // createDate: '',
            // endDate: '',
          },
        },
        {
          columnId: v4(),
          name: 'Выполнено',
          status: 'done',
          taskCard: {
            // id: '',
            // taskNumber: '',
            // title: '',
            // priority: '',
            // currentStatus: '',
            // description: '',
            // createDate: '',
            // endDate: '',
          },
        },
      ],
    },
    settings: {},
  },
};
