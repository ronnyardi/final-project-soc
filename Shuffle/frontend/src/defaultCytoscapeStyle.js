const data = [{
			selector: 'node',
			css: {
				'label': 'data(label)',
				'text-valign': 'center',
				'font-family': 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif, sans-serif',
				'font-weight': 'lighter',
				'margin-right': '10px',
				'font-size': '18px',
				'width': '80px',
				'height': '80px',
				'color': 'white',
				'padding': '10px',
				'margin': '5px',
				'border-width': '1px',
				'text-margin-x': '10px',
			}
		},
		{
			selector: 'edge',
			css: {
				'target-arrow-shape': 'triangle',
				'target-arrow-color': 'grey',
				'curve-style': 'unbundled-bezier',
				'label': 'data(label)',
				'text-margin-y': '-15px',
				'width': '5px',
				"color": "white",
				"line-fill": "linear-gradient",
				"line-gradient-stop-positions": ["0.0", "100"],
				"line-gradient-stop-colors": ["grey", "grey"],
			},
		},
		{
			selector: `node[type="ACTION"]`,
			css: {
				'shape': 'square',
				'background-color': '#213243',
				'border-color': '#81c784',
				'background-width': '100%',
				'background-height': '100%',
				'border-radius': '5px',
				'z-index': 5001,
			},
		},
		{
			selector: `node[app_name="Shuffle Tools"]`,
			css: {
				'width': '30px',
				'height': '30px',
				'z-index': 5000,
				'font-size': '0px',
				'background-width': '75%',
				'background-height': '75%',
				'background-color': 'data(iconBackground)',
				'background-fill': 'data(fillstyle)',
				'background-gradient-direction': 'to-right',
				'background-gradient-stop-colors': 'data(fillGradient)',
			}
		},
		{
			selector: `node[app_name="Testing"]`,
			css: {
				'width': '30px',
				'height': '30px',
				'z-index': 5000,
				'font-size': '0px',
			},
		},
		{
			selector: `node[?small_image]`,
			css: {
				'background-image': 'data(small_image)',
				'text-halign': 'right',
			},
		},
		{
			selector: `node[?large_image]`,
			css: {
				'background-image': 'data(large_image)',
				'text-halign': 'right',
			},
		},
		{
			selector: `node[type="CONDITION"]`,
			css: {
				'shape': 'diamond',
				'border-color': '##FFEB3B',
				'padding': '30px'
			},
		},
		{
			selector: `node[type="eventAction"]`,
			css: {
				'background-color': '#edbd21',
			},
		},
		{
			selector: `node[type="TRIGGER"]`,
			css: {
				'shape': 'octagon',
				'border-color': 'orange',
				'background-color': '#213243',
				'background-width': '100%',
				'background-height': '100%',
			},
		},
		{
			selector: `node[status="running"]`,
			css: {
				'border-color': '#81c784',
			},
		},
		{
			selector: `node[status="stopped"]`,
			css: {
				'border-color': 'orange',
			},
		},
		{
			selector: 'node[type="mq"]',
			css: {
				'background-color': '#edbd21',
			},
		},
		{
			selector: 'node[?isButton]',
			css: {
				'shape': 'ellipse',
				'width': '15px',
				'height': '15px',
				'z-index': '5002',
				'font-size': '0px',
				'border': '1px solid rgba(255,255,255,0.9)',
				'background-image': 'data(icon)',
				'background-color': 'data(iconBackground)',
			},
		},
		{
			selector: 'node[?isDescriptor]',
			css: {
				'shape': 'ellipse',
				'border-color': '#80deea',
				'width': '5px',
				'height': '5px',
				'z-index': '5002',
				'font-size': '10px',
				'text-valign': 'center',
				'text-halign': 'center',
				'border': '1px solid black',
				'margin-right': '0px',
				'text-margin-x': '0px',
				'background-color': 'data(imageColor)',
				'background-image': 'data(image)',
			},
		},
		{
			selector: 'node[?isStartNode]',
			css: {
				'shape': 'ellipse',
				'border-color': '#80deea',
				'width': '80px',
				'height': '80px',
				'font-size': '18px',
				'background-width': '100%',
				'background-height': '100%',
			},
		},
		{
			selector: "node[!is_valid]",
			css: {
				'border-color': 'red',
				'border-width': '10px',
			},
		},
		{
			selector: ':selected',
			css: {
				'background-color': '#77b0d0',
				'border-color': '#77b0d0',
				'border-width': '20px',
			},
		},
		{
			selector: '.skipped-highlight',
			css: {
				'background-color': 'grey',
				'border-color': 'grey',
				'border-width': '8px',
				'transition-property': 'background-color',
				'transition-duration': '0.5s',
			},
		},
		{
			selector: '.success-highlight',
			css: {
				'background-color': '#41dcab',
				'border-color': '#41dcab',
				'border-width': '5px',
				'transition-property': 'background-color',
				'transition-duration': '0.5s',
			},
		},
		{
			selector: '.failure-highlight',
			css: {
				'background-color': '#8e3530',
				'border-color': '#8e3530',
				'border-width': '5px',
				'transition-property': 'background-color',
				'transition-duration': '0.5s',
			},
		},
		{
			selector: '.not-executing-highlight',
			css: {
				'background-color': 'grey',
				'border-color': 'grey',
				'border-width': '5px',
				'transition-property': '#ffef47',
				'transition-duration': '0.25s',
			},
		},
		{
			selector: '.executing-highlight',
			css: {
				'background-color': '#ffef47',
				'border-color': '#ffef47',
				'border-width': '8px',
				'transition-property': 'border-width',
				'transition-duration': '0.25s',
			},
		},
		{
			selector: '.awaiting-data-highlight',
			css: {
				'background-color': '#f4ad42',
				'border-color': '#f4ad42',
				'border-width': '5px',
				'transition-property': 'border-color',
				'transition-duration': '0.5s',
			},
		},
		{
			selector: '.shuffle-hover-highlight',
			css: {
				'background-color': "#f85a3e",
				'border-color': '#f85a3e',
				'border-width': '12px',
				'transition-property': 'border-width',
				'transition-duration': '0.25s',
				'label': 'data(label)',
				'font-size': '18px',
				'color': 'white',
			},
		},
		{
			selector: '$node > node',
			css: {
				'padding-top': '10px',
				'padding-left': '10px',
				'padding-bottom': '10px',
				'padding-right': '10px',
			},
		},	
		{
			selector: 'edge.executing-highlight',
			css: {
				'width': '5px',
				'target-arrow-color': '#ffef47',
				'line-color': '#ffef47',
				'transition-property': 'line-color, width',
				'transition-duration': '0.25s',
			},
		},
		{
			selector: `edge[?decorator]`,
			css: {
				'width': '1px',
				'line-style': 'dashed',
				"line-fill": "linear-gradient",
				'target-arrow-color': '#f34079',
				"line-gradient-stop-positions": ["0.0", "100"],
				"line-gradient-stop-colors": ["#f86a3e", "#f34079"],
			},
		},
		{
			selector: 'edge.success-highlight',
			css: {
				'width': '5px',
				'target-arrow-color': '#41dcab',
				'line-color': '#41dcab',
				'transition-property': 'line-color, width',
				'transition-duration': '0.5s',
				"line-fill": "linear-gradient",
				"line-gradient-stop-positions": ["0.0", "100"],
				"line-gradient-stop-colors": ["#41dcab", "#41dcab"],
			},
		},
		{
			selector: '.eh-handle',
			style: {
				'background-color': '#337ab7',
				'width': '1px',
				'height': '1px',
				'shape': 'circle',
				'border-width': '1px',
				'border-color': 'black'
			}
		},
		{
			selector: '.eh-source',
			style: {
				'border-width': '3',
				'border-color': '#337ab7'
			}
		},
		{
			selector: '.eh-target',
			style: {
				'border-width': '3',
				'border-color': '#337ab7'
			}
		},
		{
			selector: '.eh-preview, .eh-ghost-edge',
			style: {
				'background-color': '#337ab7',
				'line-color': '#337ab7',
				'target-arrow-color': '#337ab7',
				'source-arrow-color': '#337ab7'
			}
		},	
		{
			selector: 'edge:selected',
			css: {
				'target-arrow-color': '#f85a3e',
			},
		},
		{
			selector: `edge[?source_workflow]`,
			css: {
				"background-opacity": "1",
				'font-size': '0px',
			},
		},
		{
			selector: `node[?source_workflow]`,
			css: {
				"background-opacity": "0",
				'font-size': '0px',
			},
		},
]

//{
//	selector: 'edge[?hasErrors]',
//	css: {
//		'target-arrow-color': '#991818',
//		'line-color': '#991818',
//		'line-style': 'dashed',
//		"line-fill": "linear-gradient",
//		"line-gradient-stop-positions": ["0.0", "100"],
//		"line-gradient-stop-colors": ["#991818", "#991818"],
//	},
//},


export default data 
