export class LoggerService{
    log(message:any){
        console.log('LoggerService.log():',message);
        //access some server and log the message (which is my input parameter)
    }
}