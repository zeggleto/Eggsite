export class Project {
    constructor(public name: string,
        public shortDesc: string,
        public longDesc: string,
        public technologies: string[],
        public imageUrl: string[],
        public gitLink: string,
        public projLink: string
    ) {}
}
