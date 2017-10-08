//writed by khaedir

setImmediate(function(){
    console.log("Mulai script")
    Java.perform(function(){
        var paramBolean = true;
        shortLoginClass = Java.use("com.mwr.example.sieve.ShortLoginActivity");
        shortLoginClass.checkPinResult.implementation=(function(b){
            //send("chekPinResult");
            this.checkPinResult(paramBolean)
            console.log("Mengganti fungsi checkPintResult menjadi true")
        });
        console.log("modifikasi fungsi berhasil")
    })
})