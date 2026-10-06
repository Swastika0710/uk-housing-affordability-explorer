const regionSelect=document.getElementById('region');
const compareSelect=document.getElementById('compareRegion');
const yearSelect=document.getElementById('year');
const affordabilityEl=document.getElementById('affordability');
const priceEl=document.getElementById('price');
const earningsEl=document.getElementById('earnings');
const yearsEl=document.getElementById('years');
const depositEl=document.getElementById('deposit');
const statusEl=document.getElementById('status');

const regions=Object.keys(housingData);
regions.forEach(r=>{
  [regionSelect,compareSelect].forEach(select=>{
    const o=document.createElement('option');o.value=r;o.textContent=r;select.appendChild(o);
  });
});
compareSelect.selectedIndex=1;
const years=Object.keys(housingData[regions[0]]);
years.forEach(y=>{const o=document.createElement('option');o.value=y;o.textContent=y;yearSelect.appendChild(o);});
yearSelect.selectedIndex=years.length-1;

let trendChart, regionChart;

function ratioFor(region,year){
  const d=housingData[region][year];
  return d.price/d.earnings;
}

function pressureFor(ratio){
  if(ratio>=10) return {label:'Very high',colour:'#d64545'};
  if(ratio>=8) return {label:'High',colour:'#e2a03f'};
  if(ratio>=6) return {label:'Moderate',colour:'#2680c2'};
  return {label:'Lower',colour:'#2f9e6e'};
}

function update(){
  const region=regionSelect.value;
  const comparison=compareSelect.value;
  const year=yearSelect.value;
  const d=housingData[region][year];
  const ratio=ratioFor(region,year);
  const pressure=pressureFor(ratio);

  affordabilityEl.textContent=ratio.toFixed(1);
  priceEl.textContent='£'+d.price.toLocaleString();
  earningsEl.textContent='£'+d.earnings.toLocaleString();
  yearsEl.textContent=ratio.toFixed(1)+' years';
  depositEl.textContent='£'+Math.round(d.price*0.1).toLocaleString();
  statusEl.textContent=pressure.label;
  statusEl.style.color=pressure.colour;

  if(trendChart) trendChart.destroy();
  trendChart=new Chart(document.getElementById('trendChart'),{
    type:'line',
    data:{labels:years,datasets:[
      {label:region,data:years.map(y=>ratioFor(region,y)),borderColor:'#2680c2',backgroundColor:'rgba(38,128,194,.12)',fill:true,tension:.3},
      {label:comparison,data:years.map(y=>ratioFor(comparison,y)),borderColor:'#d64545',backgroundColor:'rgba(214,69,69,.08)',borderDash:[6,4],tension:.3}
    ]},
    options:{plugins:{legend:{display:true}},scales:{y:{title:{display:true,text:'Price-to-earnings ratio'}}}}
  });

  if(regionChart) regionChart.destroy();
  regionChart=new Chart(document.getElementById('regionChart'),{
    type:'bar',
    data:{labels:regions,datasets:[{label:'Affordability ratio in '+year,data:regions.map(r=>ratioFor(r,year)),backgroundColor:regions.map(r=>pressureFor(ratioFor(r,year)).colour)}]},
    options:{plugins:{legend:{display:false}},scales:{y:{title:{display:true,text:'Price-to-earnings ratio'}}}}
  });
}

regionSelect.addEventListener('change',update);
compareSelect.addEventListener('change',update);
yearSelect.addEventListener('change',update);
update();