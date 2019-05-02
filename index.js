var countries = [
    {
        "country": "Afghanistan",
        "population": "35530081"
    },
    {
        "country": "Albania",
        "population": "2930187"
    },
    {
        "country": "Algeria",
        "population": "41318142"
    },
    {
        "country": "American Samoa",
        "population": "55641"
    },
    {
        "country": "Andorra",
        "population": "76965"
    },
    {
        "country": "Angola",
        "population": "29784193"
    },
    {
        "country": "Anguilla",
        "population": "14909"
    }
]

$(document).ready(function() {
    for (let i in countries) {
        var countryName = countries[i].country;
        var dynamicOption = "<option>"+ countryName + "</option>";
        $(".country-select").append(dynamicOption);
    }
});

$(document).on('change', '#id-select', function(event) {
    $(".detail-country").empty();
    $('.country-select').val($("#id-select option:selected").text());
    //console.log($("#id-select option:selected").text());

    var myCountryVariable = $("#id-select option:selected").text();
    var countrySelect = countries.filter(obj => obj.country === myCountryVariable);
    //console.log(countrySelect);

    var dynamicCountry = countrySelect[0].country;
    var viewCountry = "<h6> Country: " + dynamicCountry + "</h6>";
    //console.log(viewCountry);

    var dynamicPopulation = countrySelect[0].population;
    var viewPopulation = "<h6> Population: " + dynamicPopulation + "</h6>";
    //console.log(viewPopulation);
    $(".detail-country").append(viewCountry, viewPopulation);
});







//for (let i in countries) {
    //console.log(countries[i]);
    //$(".country-select").empty();
  //  var countryName = countries[i].country;
    //console.log(countryName);
    //var dynamicOption = "<option >"+ countryName + "</option>";
    //$(".country-select").append(dynamicOption);
    //console.log(dynamicOption);
//}

//$(document).on('change', '#id-select', function(event) {
  //  $('.detail-country').val($("#id-select option:selected").text());
    //alert($('#id-select option:selected').html());
    //console.log($("#id-select option:selected").text());
//});