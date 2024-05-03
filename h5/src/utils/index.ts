export function adjustRem(): void {
    const designWidth = 430 // iPhone 14 Pro Max的逻辑宽度
    const rootFontSize = 100 // 基准大小

    const resize = () => {
        const deviceWidth =
            document.documentElement.clientWidth || window.innerWidth
        const fontSize = (deviceWidth / designWidth) * rootFontSize
        document.documentElement.style.fontSize = `${fontSize}px`
    }

    resize()
    window.addEventListener('resize', resize)
}

export const iconUrl = (name: string) => {
    return new URL(`../assets/icon/${name}`, import.meta.url).href
}
