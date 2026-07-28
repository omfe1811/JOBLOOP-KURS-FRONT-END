# deploy.ps1
# Detect repo name
$repoUrl = git config --get remote.origin.url
if ($repoUrl -match "/(.+)\.git$") { $repoName = $matches[1] } else { Write-Host "❌ Cannot detect repo name"; exit 1 }

# Update vite.config.js base
(Get-Content vite.config.js) -replace 'base: ".+"', "base: `"/$repoName/`"" | Set-Content vite.config.js

# Commit changes
git add .
git commit -m "Auto-save before GH Pages deploy" -a

# Clean dist
if (Test-Path "dist") { Remove-Item -Recurse -Force dist }

# Build and deploy
npm run build
npm run deploy

Write-Host "✅ Deployment complete! Visit https://$($env:USERNAME).github.io/$repoName/"
