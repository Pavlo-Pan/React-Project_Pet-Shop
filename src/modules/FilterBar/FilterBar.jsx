import CustomCheckbox from "./CustomCheckbox/CustomCheckbox"
import SortSelect from "./SortSelect/SortSelect";
import PriceFilter from "./PriceFilter/PriceFilter";
import FlexLayout from "../layouts/FlexLayout/FlexLayout";
const FilterBar = ({
    filters: { priceFrom, priceTo, discounted, sortBy },
    onPriceChange,
    onToggleDiscounted,
    discountedOnly = false,
    onSortChange,
}) => (
    <FlexLayout>
        <PriceFilter
            priceFrom={priceFrom}
            priceTo={priceTo}
            onChange={(from, to) => onPriceChange({ priceFrom: from, priceTo: to })}
        />
        {!discountedOnly && (
            <CustomCheckbox
                label="Discounted items"
                checked={discounted}
                onChange={checked => onToggleDiscounted({ discounted: checked })}
            />
        )}
        <SortSelect
            label='Sorted'
            value={sortBy}
            onChange={val => onSortChange({ sortBy: val })}
        />
    </FlexLayout>
);

export default FilterBar;