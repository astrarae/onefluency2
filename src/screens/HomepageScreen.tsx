import {SparklesPreview} from "@/components/SparklesScreen.tsx";
import {Button} from "@/components/ui/button.tsx";
import { Link } from 'react-router-dom';

function HomepageScreen() {
    return (
        <section>
            <SparklesPreview>
                <Link to="/about">
                    <Button className="mr-4.5">Записаться на курс</Button>
                </Link>
                <Button variant="secondary" className="ml-4.5">Подробнее</Button>
            </SparklesPreview>
        </section>
    );
}

export default HomepageScreen;