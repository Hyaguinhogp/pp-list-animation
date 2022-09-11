export interface ITask {
    title: string;
    quests: IQuest[]
}

export interface IQuest {
    title: string;
    description: string;
}

export const data:ITask[] = [
    {
        title: 'Criar database',
        quests: [
            {
                title: 'Criar interface task',
                description: 'A interface terá title:string e quests:quest[]'
            },
            {
                title: 'Criar interface quest',
                description: 'A interface terá title:string e description:string'
            },
            {
                title: 'Criar testes',
                description: 'Teremos 3 tasks todas preenchidas com tarefas reais do próprio projeto'
            },
        ]
    },
    {
        title: 'Criar context para as tasks',
        quests: [
            {
                title: 'Copiar modelo',
                description: 'Ver e copiar modelo padrão'
            },
            {
                title: 'Definir valores',
                description: 'Os valores usados serão: tasks, actualTask, nextTask, PreviousTask'
            },
            {
                title: 'Criar Lógica',
                description: 'Criar lógica que vai comandar tudo'
            },
        ]
    },
    {
        title: 'Fazer animação de dados',
        quests: [
            {
                title: 'Contornar com uma div',
                description: ''
            },
            {
                title: 'Aplicar keyframe',
                description: ''
            },
            {
                title: 'Fazer animação de opacity',
                description: ''
            },
        ]
    },
    {
        title: 'Criar context para as tasks',
        quests: [
            {
                title: 'Copiar modelo',
                description: 'Ver e copiar modelo padrão'
            },
            {
                title: 'Definir valores',
                description: 'Os valores usados serão: tasks, actualTask, nextTask, PreviousTask'
            },
            {
                title: 'Criar Lógica',
                description: 'Criar lógica que vai comandar tudo'
            },
        ]
    },
    {
        title: 'Fazer animação de dados',
        quests: [
            {
                title: 'Contornar com uma div',
                description: ''
            },
            {
                title: 'Aplicar keyframe',
                description: ''
            },
            {
                title: 'Fazer animação de opacity',
                description: ''
            },
        ]
    },
]