# Checklist da Chácara

Aplicativo Android simples, com tarefas editáveis, marcação de conclusão e backup JSON local.

## Gerar o APK
1. Abra a aba **Actions** deste repositório.
2. Selecione **Build Android APK**.
3. Clique em **Run workflow** e confirme.
4. Quando terminar, abra a execução e baixe o artefato **checklist-chacara-apk**.
5. Extraia o ZIP do artefato para encontrar `app-debug.apk`, depois transfira para o Android e instale.

O primeiro build pode demorar alguns minutos. O APK de depuração serve para instalação pessoal; não é uma versão publicada na Play Store.

## Dados e offline
As tarefas e marcações ficam no armazenamento local do aplicativo. Use Exportar backup regularmente. A instalação nativa carrega os arquivos locais incluídos no APK; o service worker é voltado principalmente ao navegador/PWA.

## Desenvolvimento
- Interface: `www/`
- Capacitor: `capacitor.config.json`
- Build Android: `.github/workflows/build-apk.yml`
