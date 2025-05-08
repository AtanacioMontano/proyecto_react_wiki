import { ReactNode } from 'react';

const Home: React.FC<{children: ReactNode}> = ({ children }) => {
    return (
        <main className="flex-grow p-4">
            {children}
        </main>
    );
};

export default Home;