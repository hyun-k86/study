import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>작성된 영어 단어가 없습니다.</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}