const BASE_URL = "https://www.themuse.com/api"

export const getJob = async (level, company, location) => {
    const levelStr = level.length ? level.reduce((acc, curr) => `${acc}level=${curr.replaceAll(' ', '%20')}&`, '') : ''
    const companyStr = company.length ? `company=${(company[0].toUpperCase() + company.slice(1)).replaceAll(' ', '%20')}&` : ''
    let newListJob = []
    const fetchJob = async (value) => {
        try {
            const response = await fetch(
                `${BASE_URL}/public/jobs?${levelStr}${companyStr}location=${location.replaceAll(' ', '%20').replace(',', '%2C')}&page=${value}`
            );
            const json = await response.json();
            return [json.page_count, json.results]
        }
        catch (error) {
            console.error(error);
        }
    }
    for (let i = 1; i < 4; i++) {
        const [pg_count, pg_result] = await fetchJob(i)
        newListJob[i - 1] = { key: i, value: pg_result }
        if (pg_count === i + 1 || i === 3) {
            const data = newListJob.reduce((acc, curr) => acc.concat(curr.value), [])
            return data
        }
    }
}


export const getCompany = async (location) => {
    let newListCompany = []
    const fetchCompany = async (value) => {
        try {
            const response = await fetch(
                `${BASE_URL}/public/companies?page=${value}&location=${location.replaceAll(' ', '%20').replace(',', '%2C')}`
            );
            const json = await response.json();
            return [json.page_count, json.results]
        }
        catch (error) {
            console.error(error);
        }
    }
    for (let i = 1; i < 10; i++) {
        const [pg_count, pg_result] = await fetchCompany(i)
        newListCompany[i - 1] = { key: i, value: pg_result }
        if (pg_count === i + 1) {
            const temp = newListCompany.reduce((acc, curr) => acc.concat(curr.value), [])
            return temp
        }
    }
}