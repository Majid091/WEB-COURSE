//***~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~***//

function outerFunction(){
    let name = "majid";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}

let funcCall = outerFunction();
console.log(funcCall());


//An unknown server-side error occurred while processing the command.
//  Original error: Could not find adb.exe in E:\QA_JAVA\AUTOMATION\cmdline-tools\platform-tools\adb.exe,
// E:\QA_JAVA\AUTOMATION\cmdline-tools\emulator\adb.exe,E:\QA_JAVA\AUTOMATION\cmdline-tools\tools\adb.exe,
// E:\QA_JAVA\AUTOMATION\cmdline-tools\tools\bin\adb.exe.
// Do you have the Android SDK installed at 'E:\QA_JAVA\AUTOMATION\cmdline-tools'?



//An unknown server-side error occurred while processing the command. 
// Original error: packageAndLaunchActivityFromManifest failed. 
// Original error: Command 'java -jar 
// 'C:\\Users\\MAJID KHAN\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-adb\\jars\\appium_apk_tools.jar' 
// printLaunchActivity 'C:\\Users\\MAJID KHAN\\Downloads\\Facebook_495.0.0.45.201_APKPure.apk' 
// C\:\\Users\\MAJIDK~1\\AppData\\Local\\Temp\\com.facebook.katana' exited with code 1; 
// StdErr: Exception in thread "main" java.lang.NoSuchFieldException: modifiers
 //at java.base/java.lang.Class.getDeclaredField(Class.java:2841)
 //at io.appium.apktools.StringsXML.silenceLogger(StringsXML.java:120)
 //at io.appium.apktools.Main.main(Main.java:25)





 //platformName       Android
 //deviceName         Android Emulator
 //app                   C:\Users\MAJID KHAN\Downloads\Facebook_495.0.0.45.201_APKPure.apk
 //C:\Users\MAJID KHAN\Downloads\rarunzip.apk
 
