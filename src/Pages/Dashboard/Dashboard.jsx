import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { CiShoppingCart } from 'react-icons/ci'
import {BsArrowDown, BsArrowUp} from 'react-icons/bs'


const Dashboard = () => {

    const [state, setState] = useState({        
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        },],
        
        options: {
          chart: {
            height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                }
            },
            toolbar: {
                tools: {},
            },
            fill: {
                colors: ['#FEB019']
              },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth", 
            colors: ['#FEB019']
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
    }); 


    const [donut, setDonut] = useState({

        series: [30, 30, 30], 
        labels: ["Team A", "Team B", "Team C"],
        options: {
            plotOptions: {
                pie: {
                    
                    customScale: 1.1,
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '16px', 
                                fontWeight: 600,  
                            },
                            value: {
                                show: true,
                                fontSize: '22px', 
                                fontWeight: 600, 
                                formatter: function (val) {
                                    return val
                                }
                            },
                            total: {
                                show: true,
                                label: 'Balance',
                                color: '#373d3f',
                                formatter: function (w) {
                                    return '$12650'
                                }
                            },
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
              },
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
            }]
          
        },      
      
    });
    
    return (
        <div className=''>
            <div className="grid grid-cols-3 text-neutral h-full  place-content-center">
                <div className="px-10 col-span-2">
                    <div className="grid grid-cols-3 gap-10">
                        <div className='col-span-2'>
                            <p className="font-semibold">Sales Reports</p>
                            <ReactApexChart 
                                options={state.options}
                                series={state.series}
                                type="area"
                                height={350}
                                width={600}
                            /> 
                        </div>
                        <div className='col-span-1'>
                            <p className="font-semibold text-2xl my-10">Earnings</p>
                            <ReactApexChart options={donut.options} series={donut.series} type="donut" />
                        </div>
                        <div className="col-span-3">
                            <p className='pb-10'>Items Earning Sales ($)</p>

                            <p>Export Report</p>
                            <p className="text-2xl font-bold">Recent Orders</p>

                            <div class="flex flex-col">
                            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-0">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">
                                    <thead class="bg-white border-b">
                                        <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            ID
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          Date
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Product
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Payment
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Fullfillment
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Total
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr class=" border-b odd:bg-gray-100">
                                         
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                #A580
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Aug, 15, 2020
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Unero Black Military
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Paid
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Delivered
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            $56.00
                                            </td>
                                        </tr>
                                         
                                        <tr class=" border-b odd:bg-gray-100">
                                         
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                #A580
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Aug, 15, 2020
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Unero Black Military
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Paid
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Delivered
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            $56.00
                                            </td>
                                        </tr>
                                         
                                        <tr class=" border-b odd:bg-gray-100">
                                         
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                #A580
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Aug, 15, 2020
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Unero Black Military
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Paid
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Delivered
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            $56.00
                                            </td>
                                        </tr>
                                         
                                        <tr class=" border-b odd:bg-gray-100">
                                         
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                #A580
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Aug, 15, 2020
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                Unero Black Military
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Paid
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            Delivered
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                            $56.00
                                            </td>
                                        </tr>
                                         
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                                </div>
                                <p className="font-semibold text-sky-400 text-sm flex items-center pb-20 pt-5">View Full Orders <FaAngleRight/></p>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="col-span-1 flex w-full justify-end px-20">
                    <div className="divider divider-horizontal"></div>
                    <div className="flex flex-col w-full px-5 gap-8">
                        <div className="flex justify-between ">
                            <p className="text-xl font-semibold">Statics</p>
                            <p className='flex'>Last 30 days <FaAngleDown/></p>
                        </div>
                        <div className="box bg-orange-100 bg-opacity-50 px-5 py-7 rounded-2xl">
                            <div className="flex gap-5">
                                <p className='bg-white rounded-xl text-orange-500 text-2xl p-4 flex justify-center'><CiShoppingCart /></p>
                                <div className="flex flex-col">
                                    <p>Orders</p>
                                    <p className='font-semibold text-xl'>254</p>
                                </div>
                                <div className="flex flex-col justify-end"> 
                                    <p className='flex gap-2 text-green-400 font-semibold'><BsArrowUp/>12.5%</p>
                                </div>
                            </div>
                        </div>
                        <div className="box bg-red-100 bg-opacity-50 px-5 py-7 rounded-2xl">
                            <div className="flex gap-5">
                                <p className='bg-white rounded-xl text-orange-500 text-2xl p-4 flex justify-center'><CiShoppingCart /></p>
                                <div className="flex flex-col">
                                    <p>Revenue</p>
                                    <p className='font-semibold text-xl'>$6,260 </p>
                                </div>
                                <div className="flex flex-col justify-end"> 
                                    <p className='flex gap-2 text-green-400 font-semibold'><BsArrowUp/>7.1%</p>
                                </div>
                            </div>
                        </div>
                        <div className="box bg-green-100 bg-opacity-50 px-5 py-7 rounded-2xl">
                            <div className="flex gap-5">
                                <p className='bg-white rounded-xl text-orange-500 text-2xl p-4 flex justify-center'><CiShoppingCart /></p>
                                <div className="flex flex-col">
                                    <p>Earning</p>
                                    <p className='font-semibold text-xl'>$2,567  </p>
                                </div>
                                <div className="flex flex-col justify-end"> 
                                    <p className='flex gap-2 text-orange-400 font-semibold'><BsArrowDown/> 0.5%</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='text-xl font-semibold'>Top Countries</p>
                            <div className="flex justify-between">
                                <ul className='list-disc list-inside text'>
                                    <li>United States</li>
                                    <li>80%</li>
                                    <li>Germany</li>
                                    <li>65%</li>
                                </ul>
                                <ul className='list-disc list-inside text'>
                                    <li>United Kingdom</li>
                                    <li>65%</li>
                                    <li>Russia</li>
                                    <li>35%</li>
                                </ul> 
                            </div>
                        </div>
                        <div className='relative'>

                            <div className="round bg-orange-400 rounded-full w-10 h-10 absolute top-10 left-10 shadow-lg shadow-orange-300"></div>

                            <div className="round bg-gray-400 rounded-full w-4 h-4 absolute top-24 left-24  shadow-lg shadow-gray-300"></div>
                            <div className="round bg-sky-400 rounded-full w-3 h-3 absolute top-16 left-32  shadow-lg shadow-sky-300"></div>
                            <div className="round bg-orange-600 rounded-full w-6 h-6 absolute top-5 right-28  shadow-lg shadow-orange-300"></div>
                            <div className="round bg-green-600 rounded-full w-8 h-8 absolute top-10 right-10  shadow-lg shadow-green-300"></div>
                            <img src="https://i.ibb.co/PcbwDNS/world-map.webp" alt="world-map" border="0"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;