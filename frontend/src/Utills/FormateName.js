export const formateName = (slug) => {
    const text = slug.split("-").slice(0, -1).join(" ");
    return text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};