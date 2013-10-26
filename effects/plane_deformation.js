
// Based on work by inigo quilez and mr.doob
// please visit http://www.iquilezles.org/ and mrdoob.com/
// html dokumentti on latautunut

			
// Read texture to imgData by putting it on canvas not showed on screen 
// and using getImageData function
		
				
				z = 0;
				HEIGHT = 256;
				WIDTH = 256;
				count = 0;
			
			

							
				requestAnimationFrame(tunnel);
				
				
				function tunnel() {

				count += 0.5;
				var src_index, dst_index,
				x, y, u, v, w, a, r,  pi = Math.PI;



				for (var yi = 0; yi < HEIGHT; yi++ ) {
					
					for ( var xi = 0; xi < WIDTH; xi++ ) {

						index = (xi + yi * WIDTH) * 4;
		
		
						
						x = xi - count;
						y =yi ;
						
							
						a = Math.atan2(y,x);
						r = Math.sqrt( x * x  + y * y );

						u = 20 / r;
						v = 0.15 * a / pi;
						w = r * 0.01 ;

						u = u * 512 + (count + 8);
						
						v = v * 512 ;

						src_index = ( ( ( u >> 0 ) + ( v >> 0) * WIDTH) * 4 ) >>> 0;

										
						
						canvasData[index+0] = texture[src_index+0] *w ;
						canvasData[index+1] = texture[src_index+1] *w;
						canvasData[index+2] = texture[src_index+2] *w;
						if (awesomeness.getValue(row) === 20) {
							
							canvasData[index+3] = texture[src_index+3]  *w ;
						}
						else
							
							canvasData[index+3] = texture[0]  *w ;
						
					

					}

				}
						c.putImageData(dst_image, 0, 0);
				
					
			
							}			
		
