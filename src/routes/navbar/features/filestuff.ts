export default class ImportTextFieldPanel {
    private textInitialHeight: string;
    private textArea: HTMLTextAreaElement;
    private fileInput: HTMLInputElement;
    private wrapper: HTMLElement;
    constructor(id: string) {
        this.wrapper = document.querySelector(`[data-field-wrapper="${id}"]`) as HTMLElement;
        this.fileInput = this.wrapper.querySelector('input') as HTMLInputElement;
        this.textArea = this.wrapper.querySelector('textarea') as HTMLTextAreaElement;
        this.textInitialHeight = this.textArea.style.height;
        if (this.textArea.style.maxHeight === '') {
            this.textArea.style.maxHeight = 'none';
        }
        this.textArea.style.overflowY = 'auto';

        this.fileInput.addEventListener('change', () => {
            const file = this.fileInput.files?.[0];
            if (file) {
                this.readFile(file, this.textArea);
                this.fileInput.value = '';
                this.fileInput.blur();
            }
        });

        this.textArea.addEventListener('input', () => {
            this.textArea.style.height = this.textInitialHeight;
            this.textArea.style.height = `${this.textArea.scrollHeight
                + parseFloat(getComputedStyle(this.textArea).paddingTop)
                + parseFloat(getComputedStyle(this.textArea).paddingBottom)}px`;
        });

        this.textArea.parentElement?.addEventListener('dragover', (event) => {
            event.preventDefault();
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = 'copy';
            }
        });

        this.textArea.parentElement?.addEventListener('drop', (event) => {
            event.preventDefault();
            const file = event.dataTransfer?.files[0];
            if (file) {
                this.readFile(file, this.textArea);
            }
        });
    }

    private readFile(source: File, target: HTMLTextAreaElement): void {
        

        const reader = new FileReader();
        reader.onload = () => {
            target.value = reader.result as string;
            target.style.height = this.textInitialHeight;
            target.style.height = `${target.scrollHeight
                + parseFloat(getComputedStyle(target).paddingTop)
                + parseFloat(getComputedStyle(target).paddingBottom)}px`;
        };
        reader.readAsText(source);
    }
}