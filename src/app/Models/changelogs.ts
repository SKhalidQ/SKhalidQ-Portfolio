export interface ChangeLogModel {
    version: string;
    date: string;
    icon: string;
    logs: LogsModel[];
}

export interface LogsModel {
    title: string;
    description: string[];
}
