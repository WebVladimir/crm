import { filename } from "pathe/utils"

function getImage(path: string) {
  let assets

  if (/(\.svg)$/i.exec(path)) {
    assets = import.meta.glob("~/assets/images/**/*.svg", { eager: true })
  } else if (/(\.png)$/i.exec(path)) {
    assets = import.meta.glob("~/assets/images/**/*.png", { eager: true })
  } else {
    assets = import.meta.glob("~/assets/images/**/*.jpg", { eager: true })
  }

  const fileName = filename(path)

  const images = Object.fromEntries(
    Object.entries(assets).map(([key, value]) => [
      filename(key),
      (value as Record<string, any>).default,
    ])
  )
  return images[fileName]
}

function getImages() {
  const assets = import.meta.glob("~/assets/images/**/*.(svg|png|jpg|jpeg)", {
    eager: true,
  })

  return Object.fromEntries(
    Object.entries(assets).map(([key, value]) => [
      filename(key),
      (value as Record<string, any>).default,
    ])
  )
}

export { getImage, getImages }
