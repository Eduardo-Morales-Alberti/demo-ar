# Demo AR

Animación AR anclada a una imagen impresa en la base de un escenario 3D.
Stack: A-Frame 1.5 + MindAR 1.2.5 (image tracking) + aframe-extras + Vite. APK Android con Capacitor 6.

Las librerías están en `public/vendor/` para que el APK funcione sin conexión.

## Créditos

- Modelo `public/models/fox/fox.glb`: *Fox*, de [Khronos glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/Fox).
  Modelo de PixelMannen (CC0), rigging y animación de tomkranis (CC-BY 4.0), conversión a glTF de @AsoboStudio y @scurest (CC-BY 4.0).
- Imagen de referencia `public/targets/raccoon.*`: ejemplos de [MindAR](https://github.com/hiukim/mind-ar-js) (MIT).

## Desarrollo

```bash
npm install
npm run dev   # HTTPS en la LAN (certificado autofirmado): abrir https://<ip>:5173 en Chrome Android
```

Prueba rápida: apunta el móvil a `public/targets/raccoon.png` (en pantalla o impreso, mejor en horizontal sobre la mesa).

## Usar nuestro escenario

1. Imagen para la base: con mucho detalle, alto contraste y sin patrones repetidos.
2. Compilarla en https://hiukim.github.io/mind-ar-js-doc/tools/compile y guardar el `.mind` en `public/targets/`.
3. En `index.html`: cambiar `imageTargetSrc`, el modelo en `<a-assets>` y el transform de `#anchor`
   (el ancho de la imagen equivale a 1 unidad; Y hacia arriba en la imagen, Z hacia fuera de ella).
4. Si tiembla, ajustar `filterMinCF` / `filterBeta` en `mindar-image`.

## Publicación en GitHub Pages

`.github/workflows/deploy.yml` compila y publica `dist/` en cada push a `main`.
En el repositorio: *Settings → Pages → Source: GitHub Actions*. La demo queda en
`https://<usuario>.github.io/<repo>/` y desde Chrome Android se puede instalar con *Menú → Instalar app*.

## APK

Requiere un JDK 17+ completo (con `jlink`) y el Android SDK (`~/Android/Sdk`, API 34).

```bash
npm run build && npx cap sync android
cd android && JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64 ANDROID_HOME=$HOME/Android/Sdk ./gradlew assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```
