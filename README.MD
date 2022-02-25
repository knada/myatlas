If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.

`npx pod-install ios`

react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the following code to the body of MainActivity class:

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

and make sure to add an import statement at the top of this file:

`import android.os.Bundle;`

This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.
