
import { Plant } from '../../module/Plant'

interface Props {
    plants: Plant[]
}

const SearchResult = ({ plants }: Props) => (

    <div>
        {plants.map(plant => (
            <div key={plant.id}>
                {plant.name}
            </div>
        ))}
    </div>
)





export default SearchResult;