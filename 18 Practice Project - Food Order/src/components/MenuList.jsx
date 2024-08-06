import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function MenuList() {
    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if(error){
        return <Error title="Failed to fetch" message={error}></Error>
    }

    return (
        <ul id="meals">
            {loadedMeals.map((menu) => (
                <MealItem
                    keyId={menu.id}
                    item={menu}
                />
            ))}
        </ul>
    )
}