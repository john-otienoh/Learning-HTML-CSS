const companies = [
    {name: 'Company One', category: 'Finance', start: '1981', end: '2004'},
    {name: 'Company Two', category: 'Retail', start: '1992', end: '2008'},
    {name: 'Company Three', category: 'Auto', start: '1999', end: '2007'},
    {name: 'Company Four', category: 'Retail', start: '1989', end: '2010'},
    {name: 'Company Five', category: 'Technology', start: '2009', end: '2014'},
    {name: 'Company Six', category: 'Finance', start: '1987', end: '2010'},
    {name: 'Company Seven', category: 'Auto', start: '1986', end: '1996'},
    {name: 'Company Eight', category: 'Technology', start: '2011', end: '2016'},
    {name: 'Company Nine', category: 'Retail', start: '1981', end: '1989'},
];
//Get Only Retail Companies
const companyCategory = companies.filter( function(companies)
{
    return companies.category === 'Retail';
});
console.log(companyCategory);
//Get Companies that lasted 10 years or more
const companyAge = companies.filter(function(companies)
{
    return (companies.end - companies.start) >= 10;
});
console.log(companyAge);
//Create an array with just company name and category
const companyDetails = companies.map(function(companies)
{
    return {
        name: companies.name,
        category: companies.category,
    };
});
console.log(companyDetails);