class TextEditor {
      stackLeft = [];
      stackRight = [];

      constructor() {}
      addText(text: string): void {
          for(let i = 0; i < text.length; i++) {
              this.stackLeft.push(text[i]);
          }
      }

      deleteText(k: number): number {
         let count = 0;
        while (this.stackLeft.length && k--) {
          this.stackLeft.pop();
          count++;
        }
        return count;
      }

      cursorLeft(k: number): string {
          while(k-- && this.stackLeft.length) {
               this.stackRight.push(this.stackLeft.pop()!); 
          }
          return this.cursorReturn();
      }

      cursorRight(k: number): string {
          while(k-- && this.stackRight.length) {
              this.stackLeft.push(this.stackRight.pop()!);
          }
          return this.cursorReturn();
      }

      cursorReturn(): string {
        return this.stackLeft.slice(-10).join('');
      }
      getTextWithCursor() {
            console.log(this.stackLeft.join('') + '|' + this.stackRight.join(''));
       }
}

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */