function Search({ labelClass }) {
    return (
        <label className={`search-label ${labelClass}`} htmlFor="search-input">
            <input
                className="search-label__input"
                type="search"
                autoComplete="off"
                placeholder="Search"
                id="search-input"
            />
        </label>
    );
}

Search.defaultProps = {
    labelClass: "",
};

export default Search;
