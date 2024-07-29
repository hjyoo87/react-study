export default function Tabs({ chidren, buttons, ButtonContainer = 'menu' }) {
    // const ButtonContainer = buttonContainer;

    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {chidren}
        </>
    )
}