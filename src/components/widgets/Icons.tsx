interface IconosProps {
    size?: number;
}

const IconoInfo: React.FC<IconosProps> = ({ size = 16 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size + "px"}
            height={size + "px"}
            className="block mt-1 mr-1 shrink-0"
        >
            <path d="M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11Zm0-20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9Z" />
            <path d="M12 17c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1Zm0-8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z" />
        </svg>
    );
};

export { IconoInfo };