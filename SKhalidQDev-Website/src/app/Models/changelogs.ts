export class ChangeLogModel {
    version: string;
    date: string;
    icon: string;
    logs: LogsModel[];
}

export class LogsModel {
    title: string;
    description: string[];
}
