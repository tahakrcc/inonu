# İnönü E-Spor Forum - Dağıtım Rehberi (Render)

Sitenizi GitHub'a yükledim. Canlıya almak için şu adımları izleyin:

## 1. Render'a Giriş Yapın
[Render.com](https://render.com) adresine gidin ve GitHub hesabınızla giriş yapın.

## 2. Yeni Proje Oluşturun
- Dashboard'da **"New +"** butonuna basın.
- **"Static Site"** seçeneğini seçin.
- GitHub hesabınızı bağlayın ve `inonu` deposunu listeden seçin.

## 3. Dağıtım Ayarları
Projeyi seçtikten sonra şu ayarları yapın (Otomatik gelmiş olmalı):
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## 4. Yayınla
**"Create Static Site"** butonuna basın. Birkaç dakika içinde siteniz size özel bir URL ile (`inonu.onrender.com` gibi) yayında olacaktır!

> [!TIP]
> Google Forms linklerini test etmeyi ve `public/games/` klasöründeki resimlerin tam olduğundan emin olmayı unutmayın.
