export const Filter = ()=>{
    const HighesLow = (a, b)=>{
        return a > b? a: b
    }
    return(
        <section>
            <div>
                <div>Highest price to lowest price</div>
                <div>Lowest price to lowest price</div>
            </div>
        </section>
    )
}