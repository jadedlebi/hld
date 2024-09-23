class CollapsibleLegendControl1 {
    onAdd(map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'mapboxgl-ctrl collapsible-legend';
        
        const legendContent = document.createElement('div');
        legendContent.className = 'legend-content collapsed';

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Legend';
        toggleButton.className = 'legend-toggle';
        toggleButton.onclick = () => {
            legendContent.classList.toggle('collapsed');
        };

        this.container.appendChild(toggleButton);
        this.container.appendChild(legendContent);

        this.updateLegend();
        return this.container;
    }

    updateLegend() {
        const legendContent = this.container.querySelector('.legend-content');
        legendContent.innerHTML = `
            <div style="margin-top: 10px; font-weight: bold;">HOLC Data</div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-circle red" style="width: 12px; height: 12px; border-radius: 50%; background-color: #173B4A; display: inline-block; margin-right: 5.5px; border: 1.5px solid #8B0000"></span> Available
            </div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-circle white" style="width: 12px; height: 12px; border-radius: 50%; background-color: #173B4A; display: inline-block; margin-right: 5px; border: 2px solid #D8D9D9;"></span> Not Available
            </div>
        `;
    }
        
    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }
}

class CollapsibleLegendControl2 {
    onAdd(map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'mapboxgl-ctrl collapsible-legend';
        
        const legendContent = document.createElement('div');
        legendContent.className = 'legend-content collapsed';

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Legend';
        toggleButton.className = 'legend-toggle';
        toggleButton.onclick = () => {
            legendContent.classList.toggle('collapsed');
        };

        this.container.appendChild(toggleButton);
        this.container.appendChild(legendContent);

        this.updateLegend();
        return this.container;
    }

    updateLegend() {
        const legendContent = this.container.querySelector('.legend-content');
        legendContent.innerHTML = `
            <div style="margin-top: 10px; font-weight: bold;">HOLC Grade</div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-color a" style="width: 12px; height: 12px; background-color: transparent; display: inline-block; opacity: 0.7; margin-right: 6px; border: 3px solid #008000; border-radius: 3px;"></span> A - "Best"
            </div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-color b" style="width: 12px; height: 12px; background-color: transparent; display: inline-block; opacity: 0.7; margin-right: 6px; border: 3px solid #0000FF; border-radius: 3px;"></span> B - "Still Desirable"
            </div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-color c" style="width: 12px; height: 12px; background-color: transparent; display: inline-block; opacity: 0.7; margin-right: 6px; border: 3px solid #F8F817; border-radius: 3px;"></span> C - "Definitely Declining"
            </div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-color d" style="width: 12px; height: 12px; background-color: transparent; display: inline-block; opacity: 0.7; margin-right: 6px; border: 3px solid #FF0000; border-radius: 3px;"></span> D - "Hazardous"
            </div>
            <div style="margin-top: 10px; font-weight: bold;">Minority Population</div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-color min50-80" style="width: 12px; height: 12px; border-radius: 3px; display: inline-block; opacity: 0.7; margin-right: 6px; border: 1px solid black;"></span> 50 - 80%
            </div>
            <div style="display: flex; align-items: center; margin-top: 5px;">
                <span class="legend-color min80" style="width: 12px; height: 12px; border-radius: 3px; display: inline-block; opacity: 0.8; margin-right: 6px; border: 1px solid black;"></span> > 80%
            </div>
        `;
    }
        
    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }
}

map.on('load', function () {
    const legendControl1 = new CollapsibleLegendControl1();
    const legendControl2 = new CollapsibleLegendControl2();

    map.addControl(legendControl1, 'bottom-right');
    map.addControl(legendControl2, 'bottom-right');
    
    const legend1Container = legendControl1.container;
    const legend2Container = legendControl2.container;
    legend2Container.style.display = 'none'; // Start with the second legend hidden

    map.on('zoomend', () => {
        const zoomLevel = map.getZoom();
        if (zoomLevel < 9) {
            legend1Container.style.display = 'block';
            legend2Container.style.display = 'none';
        } else {
            legend1Container.style.display = 'none';
            legend2Container.style.display = 'block';
        }
    });
});
