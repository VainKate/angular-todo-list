export interface Task {
  id: number;
  label: string;
  done: boolean;
}

export const tasks = [
  {
    id: 1,
    label: 'Coder une todolist en impératif',
    done: true,
  },
  {
    id: 13,
    label: 'Coder une todolist en React',
    done: true,
  },
  {
    id: 4,
    label: 'Coder une todolist en Angular',
    done: false,
  },
  {
    id: 8,
    label: 'Préparer des crêpes',
    done: false,
  },
];
