// Custom wrapper for localStorage to satisfy PersistStorage interface
export const customStorage = {
    getItem: (name: string) => {
        const value = localStorage.getItem(name);
        return value ? JSON.parse(value) : null;
    },
    setItem: (name: string, value: any) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
        localStorage.removeItem(name);
    },
};