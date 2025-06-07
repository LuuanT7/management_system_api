export interface IClassDTO {
    id: string,
    name: string,
    subject: string,
    schedule: string,
    teacherId: string
}

export interface ICreateClassDTO {
    name: string,
    subject: string,
    schedule: string,
    teacherId: string
}

export interface IUpdateClassDTO {
    id: string,
    name?: string,
    subject?: string,
    schedule?: string,
    teacherId?: string
}