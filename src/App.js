import React, { useState } from "react";
import "./styles.css";

var marvelDB = {
  spiderman: [
    {
      id: "1",
      director: "sam raimi",
      name: "Spider-Man",
      release: "2002",
      rating: "7.3/10",
      description:
        "Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name"
    }
  ],

  ironman: [
    {
      id: "2",
      director: "Jon Favreau",
      name: "Ironman",
      release: "2008",
      rating: "8.7/10",
      description:
        "Based on popular marvel character ironman played by robert downeyjr"
    }
  ],

  avengers: [
    {
      id: "3",
      director: "joss wheedon",
      name: "Avengers",
      release: "2018",
      rating: "8.7/10",
      description:
        "first part of avenger franchaise main marvel characters team up to form avengers team against loki "
    }
  ],

  captainamerica: [
    {
      id: "4",
      director: "joe joshton",
      name: "Captain america first avenger",
      release: "2011",
      rating: "8.6/10",
      description: "First part of captain America Series"
    }
  ],

  blackpanther: [
    {
      id: "5",
      director: "ryan coogler",
      name: "Black Panther",
      release: "2018",
      rating: "8.9/10",
      description: "Story of wakanda king avenge against his own brother."
    }
  ],

  thor: [
    {
      id: "6",
      director: "Kenneth Branagh",
      name: "Thor",
      release: "2011",
      rating: "7/10",
      description:
        "story of god of thunder,who loses his powers and stay on earth only to fight with his own brother Loki"
    }
  ]
};

export default function App() {
  var [selectMovie, setSelectMovie] = useState("ironman");

  function movieClickHandler(movie) {
    setSelectMovie(movie);
  }
  return (
    <div className="App">
      <img
        className="imag"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAA/FBMVEUAAAD////wHiHxHiRMEBT4ICT8///1ICVRExLwHiDtAAD8/vv//v/uHyDriIY4DhDwEBfqeXyvHB/wFxrlPkHwqKzqhIbpAAD69PXwAA3xtLblIRvnSUjlFRzws7nvHSbqTFDkY2Pz0M7xxsrnWlz67uzyAADz0dbrbHDqiojriI3pAAv59PDrgYATCAZVFg9bEBY6Ewy3HR7uurXlcG/rPDjskJbnKC3snqDsvLbvtrj15OPz2drhVFTrm5jiqabgbXLZUVDu29PoUUbiHCHqbmjsl57jGQ/129/acnDrSlXzy9LmKTLpko3kwb7wSEzbQTrgm5bt5t/tf3XRr7cWAAALrklEQVR4nO2cDXfbthWGS2K6GggyoUfJFOQP2dZHnEhut9mKXEm228Rp09aO1/X//5cBBAECJBunO8sC99z3nNYiCMLEI9x7gQs4X32FQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQqP+Zvv7mm7/6p7//40tzKfS846X++aW5FHreSUIhGpai5qKlyFx/QpF+0C2nzQZbikj2ty/NpdDzTq1Hj+sPP/CH9YThfH79WeB8DrTUHzjJ5+3pfyFKOt7B+V001P3ZUo8Kv0sbPrqtlnLRtOnNaVVGRx7BoSQRL0ZCQoh8ya7qR5LoopAkRR/k/3WtblJ0KEmILVFJ9FEUlrXKgEWTUUjaJWuIduXHROER1T0aOZTudXikNU+T4gUpnZmySH2z3bkp4HPVjSx1JVtLuqaWIkhpZ85TnjY15xmlafnLZwktq3sEh5DOQf9QaDgcHg7PL1L1RabD87Jofbiksih/XdYaDte7RS26/2rX0SqipDu/LGt92wuLtsLVy912vVzSbLJey+rr81GoqhNvzEoaUXYQB1rwYSbfMUnvgOmi4CiTZbONqRVsc1nC7wNXsF5l3ehEX52lhaGkF6IN1VKtOhxn/KX+LXvaqXk0ciScgXlftim6TfiOgROAgpOzqluDueyJ7pjV28EVj4b6qh8VveXXqi0WL2KHD5NwnpWfDZzQGzhd4T0dOHAgbCgMRQ9jUyTgCNd5V3UM2J2s1YATxwyuZvflozCOpAsP+bh8ErYtI+eZGTmyrgwA/piVsHHqwJlksizaWkVHmXRCp9a3DldFUR2OuBEP9o71g5tcuhCaG3u8YW7lOhwlf+AkLhyA16mA092LrT4UcPi1NULgWRq2wokBTnoBK6nOC39smoeXH4Wjw7s3cDoNOGsu4KRX1TCRI4cKOOd2v/pcFjXhyBa+G2g4PTkKs33dUPC9W1X4nFTAidXNPRnI5dTHJ5/jwImDTSSHyb0LRxraG9uZCnfyO3Bi2G5YrDDt8JEAfaGxDVYNOFlaOWQzU/QHjvi+DhbWGw8ORGyKxlYXilBO5wsbziayo1UsQFQWE5ual1xEIH6p4WxXULpqxkA8oswKNBwdrRJf4HQacISvDWk+rfqq4GQ9ZsNhP3YsOAyuz2PrCV1zLOcFBrSYBZVxjMWDRaGJmOc04Hg2ciqzEnrJw2xpec4CDk2PnSkK9AQcbRLClHpRb2MqGGcuwlVoBatXS33rJD8QSg6S0HLIXsLJXDjDKEwvoIpWCg5/BXaogYvMgbOf8dtFfQYcLMSkid6amfGkghMV6zdpdE8KDmwjyvtQMyvKhw6c4JrX4Iy097Db2k/D7MiAvu2BgaOzGg4c6hecjnihGhzhkWcvwOliRrPoxIVzLr779JUFh3QyZwAWEstYfqbbmuYWHBEkJQpiRStdNPIpE+jCkbOTPAB3EhiO5lN3TMilpwuHROvGyLmMwuhGX524cFSuqBbKPYcjFtP8rX1dzHM6t7VuL3LqmpWwkNeNkbOOkuhEzXpisQ51zCpsmpVnPkfBsUM5g8OZM7kr4GRHtW6zZVaDI1ZfdTbsfU7z0k8zAb0XPDk4tVAOJ/nYdi/SIdP0rNbt4Dh14dAk/U7fNDYp/NdtoPIULNhPbTjUhSPnOdRDOHWfM/jRSmuVcHi/DmeXUxcO5bsGDtNt9dKJZi5A9fTjrXDCpzBygu+duFTAMek9g+MmcuCkYXeus1zByUbDeRfpOmyT0wpOrhLHLhziP5wguHHzdRKOmeaygTISEPM4N1p186m+6o+Z4gv3Ji/IxpEZObB4IbUdpzJaVatyxcZvOAwaPudAl0zV4hzi6bwGZ65X3wG86zOdDJyZjPIP3MAR604pNqj81pOBEzfMKtvXvLZDPaxWmbt8uBsYT/PjMyhqxcH7uYmEF1lmHLL8IdblArDPOeSWeU5dTPRcLLbKq7UJ8/s2nGV+OmA6Sr2ZTfSEJq5SOEuq4ehgVsLRZvVU4fBLPXIudfQJfksNnIBtF9ZWzu58xfTVT5rqYh5WI+dPBUesDIreAuzc6f5dcuNznB7H8aqTT7XT+aDH0HY2+h04JdI9udnpnc95HE4abXRa+OdcVx5HrXBids7p7BfQV3oIrWdJC5zQbziUusuHJpzgKE0GOi28ZzZttjlvgxOwu4zObhrF91z4HDep0XDIZZLHHzgywf4YHN4Dlfpk05zrtTdrhwOvOQn5biO3M0lH1QzZwAmdlAUpjnF4tjXzKBy9283eR/w1lKvsZYtZiclhLrdjrqBWHN91RlSbVem8BZx6yqLY1PMnZeFuzbTBgaNInxiA9Syd6Lh03DJy4i0V63MSHtTb2My7Fpx4LPXLOgufEJzKX8Ym3SXgzLQpwTWntwpOzF7PKjhm6nKXqS1gNzcWsF8iMZ40HGGd6gQPqZmVtCp/Dkx25QGuyqymxhrEDH9THo6A/eiFLr5Iw3yh4MDaLCoD0M/B/byAUz1Roh7OLDjBdK5IOAtPXeQNHBHKCdFwGHxbfdXx9IOKUAweck0Pfu6EeoEObyo4gdkO36oEKHfDFYOztA0OcVfl5cjxyyEbs6pSgDF8WBs4B3pgsFWWzdSiPRa2oc2KwVrM/dSnZSYnK+kzcKc0b6n4RRYctcQkpLbw9Go72IUDk+rEEtyPDZyJWQP862G/d62iesxudXYrhgszJZaRXEws6+HqQB6TMznkpwHHPUgA+1sdilhwpeEED+6sRe/fBkcmdwoXNzoQvZHnKwm9c1b2UBxPcEYOacAhxLczgS6co77BsNCZZBb0ho0pXaGdCs7ZgwlYy+L87XzqPDOOunU4SjackWehvA5nR8edIs1ejpzeiXvoSOvSgqNXX0Eg7EqePT1x4FzzxDIr4a6UDdn7VrcGjqcjZ7I0C8V+VMHZtI+c8Y75eDbTm1awyeWo4IcO0IvUNiszz8mIiVaQ8ULUo5FDXDiROXtyXMG5GrSPnE21X3PGb/WQg4fivKC7l1PMDSs4TOWQX1xVC0+4kWeX++t9r473V2nSWMD5UH4M9mYmWv3E2kfOopohn/FoXFokXKeJmPk64WowL04smIVn6bytM4FGx6k3k0D3fA5MZuV5N3gfaTgB/MrioFW/lj9ZcJZmxyrQQbyJRKvZnn1wTkwNqQ1HlzfgyGOC3sIp9+AY9Lk2qyD4EJQLBjXBMW4JvoUKTneujC8OoDeiIbFWV2LxIM+/fSocb8yq7pDTgzIdepoaOKzcswK1rwvVQmprRodYHURmGnAtAvVoVm0DxqAiGK3nc1rhZP44ZCefA5Msel84BLaiGo7ZqGHwb/knH4dDfcjP2sIRcLIjDWeTU2JvIMuT3wpOPcvTDseXkdOpwUmjYsIn4jExPqfSDyL6igg8qRUXZkU6XO+KQo+Sbrpb3YYlLeE4LdpHbX2E0xg56an0q3AYkWhcC+AgOy3maOmqHrwKOCS91/UueThKq0MrMC3O+Vsz5I/D8casZLI/GQBINwsCTqcnPjHYycTIiZmrYoFESDffQO0O7Ag4dKUuAlkx7MqkWHlXHeSSKYvAfiqWcF5KYHEp6YY8c8gj7WjFy4bzgfywJGR2AjXdpGp+H40D90ZQpGtIZJ64ol21ulKXfQOn1mIBxx2dAo4vI0f5nIvT09PjyeTnt7eiB5OdnZ2LLCTZ6U5Ny0zBKaq4KgyO9n5TV2cPSZdk78zdB6r+5GPVaFG01Xc0fPDH53SKJXTxt5qZkLkwH2yZP05o3ElV76lzmdXuCjotLZZLKiPqz8JTwSFdYqtrLrv6ouvUMEXuc7WmHn1Q3VMpLvWfZ/mcZu++uBDOR+QPnOTxl/2/yxc40ucYP1v9uwGfVtS892lFj/0eb+DQrnfy5V9e+vovXur5l+aCQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCaf0HSARMNY0luVsAAAAASUVORK5CYII="
      ></img>
      <h1>
        Marvel- <span>Movies</span>-Recommender
      </h1>
      <h2>Watch this awesome marvel superhero movies.</h2>
      {Object.keys(marvelDB).map((movie) => (
        <button onClick={() => movieClickHandler(movie)}>{movie}</button>
      ))}

      <ul>
        <h3>Details of movie 👇</h3>
        {marvelDB[selectMovie].map((category) => (
          <li key={category.id}>
            {/* <div>{category.id}</div> */}
            <div className="cate">{category.name}</div>
            <div className="cate">{category.release}</div>
            <div className="cate">{category.rating}</div>
            <div className="cate">{category.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
