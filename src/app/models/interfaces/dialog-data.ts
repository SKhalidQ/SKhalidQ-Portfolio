export interface DialogData {
  title: string;
  message: string;
  actions: {
    positive?: string;
    negative: string;
  },
  reloadOnClose?: boolean;
}
