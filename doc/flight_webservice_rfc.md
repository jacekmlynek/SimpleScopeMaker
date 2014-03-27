# Flights Webservice Concept

## Table of Contents
* [Flights](flight_webservice_rfc.md#flights)
    * [Request](flight_webservice_rfc.md#request)
    * [Request parameters description](#request-parameters-description)
    * [Response](#response)
        * [Example response with flights available](#example-response-with-flights-available)
        * [Example response with no flights available](#example-response-with-no-flights-available)
        * [Example response with error](#example-response-with-error)
    * [Response nodes description](#response-nodes-description)
        * [Legs description](#legs-description)
        * [Pricing options description](#pricing-options-description)
        * [Recomendations description](#recomendations-description )
    * [More flights response examples](#more-flights-response-examples)
    

## Flights

### Request

`GET /flights/test,149045/LIS,OPO/20111229T0000,20111230T0000/Return/1ADT1CHD?token=52750b30ffbc7de3b362`

### Request parameters description

| Parameter | Description |Values|
| ------| ----------- |------|
| /flights| transaction name ||
| /test,149045|  anixe contract and agency number ||
| /LIS,OPO|  origin, destination tlc||
| /20111229T0000,20111230T0000| departure and return date time |ISO 8601 in format yyyyMMddHHmm|
| /Return|  flight type|single, return, openJaw|
| /1ADT1CHD|  passangers count and type|ADT - adult, CHD - child, INF - infant|
| /token|  security token provided by anixe||


### Response

#### Example response with flights available

```xml
<response contract="testdp" agency="300001" id="4898671258157346463">
  <transaction name="flights" status="OK">
    <legs>
      <leg num="1" itnerary_num="1" source="AMADEUS">
        <segment num="1">
          <flight>
            <operating code="TK" name="Turkish Airlines" number="123" />
            <marketing code="TP" name="TAP" number="456" />
            <equipment code="738" name="Boeing 737-800" />
          </flight>
          <origin code="LIS" name="Lisbon" airport="Lisbon" />
          <destination code="WAW" name="Warsaw" airport="Warsaw" />
          <date from="2014-06-11T12:45:00Z" to="2014-06-11T16:55:00Z" />
        </segment>
      </leg>
      <leg num="2" itnerary_num="2" source="AMADEUS">
        <segment num="1">
          <flight>
            <operating code="LO" name="PLL LOT" number="234" />
            <marketing code="TP" name="TAP" number="879" />
            <equipment code="738" name="Airbus A321+100-200" />
          </flight>
          <origin code="WAW" name="Warsaw" airport="Warsaw" />
          <destination code="LIS" name="Lisbon" airport="Lisbon" />
          <date from="2014-06-18T18:00:00Z" to="2014-06-18T21:15:00Z" />
        </segment>
      </leg>
      <leg num="3" itnerary_num="2" source="AMADEUS">
        <segment num="1">
          <flight>
            <operating code="LO" name="PLL LOT" number="111" />
            <marketing code="TP" name="TAP" number="647" />
            <equipment code="738" name="Airbus A321+100-200" />
          </flight>
          <origin code="WAW" name="Warsaw" airport="Warsaw" />
          <destination code="FRA" name="Frankfurt" airport="Frankfurt" />
          <date from="2014-06-18T14:20:00Z" to="2014-06-18T16:45:00Z" />
        </segment>
        <segment num="2">
          <flight>
            <operating code="TP" name="TAP" number="648"/>
            <marketing code="TP" name="TAP" number="648" />
            <equipment code="739" name="Airbus A322+100-200" />
          </flight>
          <origin code="FRA" name="Frankfurt" airport="Frankfurt" />
          <destination code="LIS" name="Lisbon" airport="Lisbon" />
          <date from="2014-06-18T17:20:00Z" to="2014-06-18T19:45:00Z" />
        </segment>
      </leg>
    </legs>
    <pricing_options>
      <pricing_option num="1">
        <price currency="EUR" value="330.00" tax="30.00" provider_value="250.00" provider_currency="GBP" provider_tax="20.00" />
        <pax type="ADT" count="1">
          <price currency="EUR" value="220.00" tax="20.00" provider_value="150.00" provider_currency="GBP" provider_tax="15.00"/>
        </pax>
        <pax type="CHD" count="1">
          <price currency="EUR" value="110.00" tax="10.00" provider_value="100.00" provider_currency="GBP" provider_tax="5.00" />
        </pax>
      </pricing_option>
    </pricing_options>
    <recommendations>
      <recommendation mesh="13sdfjfkh472381" pricing_option_ref="1">
        <recommendation_detail leg_ref="1" segment_ref="1">
          <farebasis code="PTAPPL" bcl="P" cbc="Y" ptc="ADT" />
          <farebasis code="PTAPPL/CHD" bcl="P" cbc="Y" ptc="CHD" />
        </recommendation_detail>
        <recommendation_detail leg_ref="2" segment_ref="1">
          <farebasis code="PTAPPL" bcl="P" cbc="Y" ptc="ADT" />
          <farebasis code="PTAPPL/CHD" bcl="P" cbc="Y" ptc="CHD" />
        </recommendation_detail>
      </recommendation>
      <recommendation mesh="nsdf782342jksd2" pricing_option_ref="1">
        <recommendation_detail leg_ref="1" segment_ref="1">
          <farebasis code="PTAPPL" bcl="P" cbc="Y" ptc="ADT" />
          <farebasis code="PTAPPL/CHD" bcl="P" cbc="Y" ptc="CHD" />
        </recommendation_detail>
        <recommendation_detail leg_ref="3" segment_ref="1">
          <farebasis code="WTAPPL" bcl="W" cbc="Y" ptc="ADT" />
          <farebasis code="WTAPPL/CHD" bcl="W" cbc="Y" ptc="CHD" />
        </recommendation_detail>
        <recommendation_detail leg_ref="3" segment_ref="2">
          <farebasis code="WTAPPL" bcl="X" cbc="Y" ptc="ADT" />
          <farebasis code="WTAPPL/CHD" bcl="X" cbc="Y" ptc="CHD" />
        </recommendation_detail>
      </recommendation>
    </recommendations>
  </transaction>
</response>
```
#### Example response with no flights available

```xml
<response contract="testdp" id="4898671258157346463">
  <transaction name="flights" status="OK"/>
</response>
```
#### Example response with error

```xml
<response contract="testdp" id="5200861284063735197">
  <transaction name="flights" status="ERR">
    <errors>
      <error>Invalid token.</error>
    </errors>
  </transaction>
</response>
```

## Response nodes description

Flights response contains three main nodes:

* legs
* pricing_options
* recommendations

Basically legs and pricing option nodes contain flight details while recomendation node only refer to them.
Legs provide detailed flight information like origin, destination, flight number, etc.
Pricing option provides all price info including price per pax type. 

### Legs description  

| Node or attribute | Description |Values|
| ------| ----------- |------|
| response|  ||
| &nbsp;&nbsp;@contract| contract name  |text, e.g. test|
| &nbsp;&nbsp;@agency   | agency number  |number, e.g. 520450|
| &nbsp;&nbsp;@id   | transaction identifiactor |number, e.g. 1235154656756842|
| &nbsp;&nbsp;transaction   |  contains transaction specific data ||
| &nbsp;&nbsp;&nbsp;&nbsp;@name   | transaction name|flights, flight, flight_book|
| &nbsp;&nbsp;&nbsp;&nbsp;@status   | transaction status indicating success or failure|OK, ERR|
| &nbsp;&nbsp;&nbsp;&nbsp;legs   | groups all legs||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leg   | groups segments by flight direction (itnerary_num )||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@num   | leg number unique inside transaction|integer value e.g. 1,2,3|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@itnerary_num   | itinerary number, can be use to determine leg direction.|1 - outbound, 2 - inbound (for return flight type), n - n-th itinerary in open-jaw|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@source   |determine which provider returned leg |e.g AMADEUS, WORLDSPAN|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;segment   |contains all information for the smallest flight part||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@num   |segment number, unique inside leg|integer value e.g. 1,2|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;origin   |contains origin info||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@code   |origin airport code|3-letter code e.g. WAW, LIS |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@name   |origin city name|text, e.g. London|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@airport   |origin airport name|text, e.g. London Luton|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;destination   |contains destination info||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@code   |destination airport code|3-letter code e.g. WAW, LIS |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@name   |destination city name|text, e.g. London|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@airport   |destination airport name|text, e.g. London Luton|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date   |||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@from   |departure date and time|ISO-8601 date e.g. 2014-06-18T14:20:00Z|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@to   |arrival flight date and time|ISO-8601 date e.g. 2014-06-18T20:00:00Z|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flight   |||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operating   |||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@code   |operating carrier code|2-letter code e.g. LO|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@name   |operating carrier name|text, e.g. LOT|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@number   |operating carrier number|text, e.g. 879|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;marketing   |||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@code   |marketing carrier code|2-letter code e.g. TA|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@name   |marketing carrier name|text, e.g. TAP|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@number   |marketing carrier number|text, e.g. 879|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;equipment   |||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@code   |additional flight info code|text, e.g. 738|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@name   |additional flight info free flow text|text, e.g. Airbus A321+100-200|

### Pricing options description  

| Node or attribute | Description |Values|
| ------| ----------- |------|
| pricing_options|  ||
| &nbsp;&nbsp;pricing_option|  ||
| &nbsp;&nbsp;&nbsp;&nbsp;@num   | pricing option number, unique inside response |integer, e.g. 1, 2, 3|
| &nbsp;&nbsp;&nbsp;&nbsp;price   | provide prices info for whole pricing option ||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@currency   | price currency |text, e.g. EUR|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@value   | total price value |decimal, e.g. 210.40|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@tax   | total tax value |decimal, e.g. 30.00|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@provider_currency   | original currency returned from provider. Visibility is configurable |text, e.g. GBP|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@provider_value   | original provider value. Visibility is configurable |decimal, e.g. 180.23|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@provider_tax   | original provider tax value. Visibility is configurable |decimal, e.g. 21.09|
| &nbsp;&nbsp;&nbsp;&nbsp;pax  | groups price info per pax type ||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@type   | passanger type |ADT - adult, CHD - child, INF - infant|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@count   | number of passangers for specific type|integer, e.g. 1, 2, 3|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price   | price details for pax type ||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@currency   | price currency per pax type|text, e.g. EUR|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@value   | total price value per pax type|decimal, e.g. 230.00|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@tax   | total tax value per pax type |decimal, e.g. 30.00|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@provider_currency   | orginal currency per pax type returned from provider. Visibility is configurable |text, e.g. GBP|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@provider_value   | original provider value per pax type. Visibility is configurable |decimal, e.g. 123.45|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@provider_tax   | original provider tax value. Visibility should is configurable |decimal, e.g. 23.45|


### Recomendations description 
| Node and attributes | Description |Values|
| ------| ----------- |------|
| recommendations|  ||
| &nbsp;&nbsp;recommendation| combination of leg, segment and pricing option that can be booked||
| &nbsp;&nbsp;&nbsp;&nbsp;@mesh   | unique recomendation identifier |encoded identifier, e.g. VGhlIGFuc3dlciBpcyA0Mg==|
| &nbsp;&nbsp;&nbsp;&nbsp;@pricing_option_ref   | number that refer to pricing option @num|integer, e.g. 1, 2, 3|
| &nbsp;&nbsp;&nbsp;&nbsp;recommendation_detail   | ||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@leg_ref   | number that refer to flight leg @num|integer, e.g. 1, 2, 3|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@segment_ref   | number that refer to segment @num|integer, e.g. 1, 2, 3|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;farebasis   | ||
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@code  | farebasis code |text, e.g. WTAPPL/CHD|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@bcl  | booking class |text, e.g. W, U|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@cbc  | cabin class |text, e.g. Y|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@ptc  | pax type assigned to specific farebasis|ADT - adult, CHD - child, INF - infant|

### More flights response examples

* [one way flights response example](single_flights_response.xml)
* [open jaw flights resposne example](openJaw_flights_response.xml)
