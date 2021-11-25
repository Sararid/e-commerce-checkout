
const api = () => {
    return (
        fetch('https://restcountries.com/v3.1/all') //
            .then(response => response.json())

            .then(response => {
                const result = response

                    .map(item => {
                        return {
                            name: item.name.common
                        }

                    });
                return (result);
            })
            .catch(error => { console.log('err', error) })


    )
}

export default api
