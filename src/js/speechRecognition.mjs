export class SpeechRecognitionHandler {
   constructor(onResult, onError, onEnd, lang = 'pt-BR') {
      if (!('webkitSpeechRecognition' in window)) {
         throw new Error('A API de reconhecimento de voz não é suportada nesse navegador')
      }

      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.lang = lang;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (e) => {
         const transcript = e.results[0][0].transcript
         onResult(transcript)
      }

      this.recognition.onerror = (e) => {
         if (onError) onError(e.error)
      }

      this.recognition.onend = () => {
         if (onEnd) onEnd();
      }
   }

   start() {
      this.recognition.start()
   }
   
   stop() {
      this.recognition.stop();
   }
}