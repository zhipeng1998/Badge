// import { useEffect, useState } from "react";
// import "./index.less";
// import * as dat from "dat.gui";

// const MouseFire = () => {
//   const [client, setClient] = useState([0, 0]);
//   const red = [
//     0.0053, 0.0107, 0.016, 0.0214, 0.0267, 0.0321, 0.0374, 0.0428, 0.0481,
//     0.0535, 0.0588, 0.0642, 0.0695, 0.0749, 0.0802, 0.0856, 0.0909, 0.0963,
//     0.1016, 0.107, 0.1123, 0.1176, 0.123, 0.1283, 0.1337, 0.139, 0.1444, 0.1497,
//     0.1551, 0.1604, 0.1658, 0.1711, 0.1765, 0.1818, 0.1872, 0.1925, 0.1979,
//     0.2032, 0.2086, 0.2139, 0.2193, 0.2246, 0.2299, 0.2353, 0.2406, 0.246,
//     0.2513, 0.2567, 0.262, 0.2674, 0.2727, 0.2781, 0.2834, 0.2888, 0.2941,
//     0.2995, 0.3048, 0.3102, 0.3155, 0.3209, 0.3262, 0.3316, 0.3369, 0.3422,
//     0.3476, 0.3529, 0.3583, 0.3636, 0.369, 0.3743, 0.3797, 0.385, 0.3904,
//     0.3957, 0.4011, 0.4064, 0.4118, 0.4171, 0.4225, 0.4278, 0.4332, 0.4385,
//     0.4439, 0.4492, 0.4545, 0.4599, 0.4652, 0.4706, 0.4759, 0.4813, 0.4866,
//     0.492, 0.4973, 0.5027, 0.508, 0.5134, 0.5187, 0.5241, 0.5294, 0.5348,
//     0.5401, 0.5455, 0.5508, 0.5561, 0.5615, 0.5668, 0.5722, 0.5775, 0.5829,
//     0.5882, 0.5936, 0.5989, 0.6043, 0.6096, 0.615, 0.6203, 0.6257, 0.631,
//     0.6364, 0.6417, 0.6471, 0.6524, 0.6578, 0.6631, 0.6684, 0.6738, 0.6791,
//     0.6845, 0.6898, 0.6952, 0.7005, 0.7059, 0.7112, 0.7166, 0.7219, 0.7273,
//     0.7326, 0.738, 0.7433, 0.7487, 0.754, 0.7594, 0.7647, 0.7701, 0.7754,
//     0.7807, 0.7861, 0.7914, 0.7968, 0.8021, 0.8075, 0.8128, 0.8182, 0.8235,
//     0.8289, 0.8342, 0.8396, 0.8449, 0.8503, 0.8556, 0.861, 0.8663, 0.8717,
//     0.877, 0.8824, 0.8877, 0.893, 0.8984, 0.9037, 0.9091, 0.9144, 0.9198,
//     0.9251, 0.9305, 0.9358, 0.9412, 0.9465, 0.9519, 0.9572, 0.9626, 0.9679,
//     0.9733, 0.9786, 0.984, 0.9893, 0.9947, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1,
//   ];
//   const grn = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0053, 0.0107, 0.016, 0.0214, 0.0267,
//     0.0321, 0.0374, 0.0428, 0.0481, 0.0535, 0.0588, 0.0642, 0.0695, 0.0749,
//     0.0802, 0.0856, 0.0909, 0.0963, 0.1016, 0.107, 0.1123, 0.1176, 0.123,
//     0.1283, 0.1337, 0.139, 0.1444, 0.1497, 0.1551, 0.1604, 0.1658, 0.1711,
//     0.1765, 0.1818, 0.1872, 0.1925, 0.1979, 0.2032, 0.2086, 0.2139, 0.2193,
//     0.2246, 0.2299, 0.2353, 0.2406, 0.246, 0.2513, 0.2567, 0.262, 0.2674,
//     0.2727, 0.2781, 0.2834, 0.2888, 0.2941, 0.2995, 0.3048, 0.3102, 0.3155,
//     0.3209, 0.3262, 0.3316, 0.3369, 0.3422, 0.3476, 0.3529, 0.3583, 0.3636,
//     0.369, 0.3743, 0.3797, 0.385, 0.3904, 0.3957, 0.4011, 0.4064, 0.4118,
//     0.4171, 0.4225, 0.4278, 0.4332, 0.4385, 0.4439, 0.4492, 0.4545, 0.4599,
//     0.4652, 0.4706, 0.4759, 0.4813, 0.4866, 0.492, 0.4973, 0.5027, 0.508,
//     0.5134, 0.5187, 0.5241, 0.5294, 0.5348, 0.5401, 0.5455, 0.5508, 0.5561,
//     0.5615, 0.5668, 0.5722, 0.5775, 0.5829, 0.5882, 0.5936, 0.5989, 0.6043,
//     0.6096, 0.615, 0.6203, 0.6257, 0.631, 0.6364, 0.6417, 0.6471, 0.6524,
//     0.6578, 0.6631, 0.6684, 0.6738, 0.6791, 0.6845, 0.6898, 0.6952, 0.7005,
//     0.7059, 0.7112, 0.7166, 0.7219, 0.7273, 0.7326, 0.738, 0.7433, 0.7487,
//     0.754, 0.7594, 0.7647, 0.7701, 0.7754, 0.7807, 0.7861, 0.7914, 0.7968,
//     0.8021, 0.8075, 0.8128, 0.8182, 0.8235, 0.8289, 0.8342, 0.8396, 0.8449,
//     0.8503, 0.8556, 0.861, 0.8663, 0.8717, 0.877, 0.8824, 0.8877, 0.893, 0.8984,
//     0.9037, 0.9091, 0.9144, 0.9198, 0.9251, 0.9305, 0.9358, 0.9412, 0.9465,
//     0.9519, 0.9572, 0.9626, 0.9679, 0.9733, 0.9786, 0.984, 0.9893, 0.9947, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   ];
//   const blu = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0.0079, 0.0159, 0.0238, 0.0317, 0.0397, 0.0476, 0.0556, 0.0635, 0.0714,
//     0.0794, 0.0873, 0.0952, 0.1032, 0.1111, 0.119, 0.127, 0.1349, 0.1429,
//     0.1508, 0.1587, 0.1667, 0.1746, 0.1825, 0.1905, 0.1984, 0.2063, 0.2143,
//     0.2222, 0.2302, 0.2381, 0.246, 0.254, 0.2619, 0.2698, 0.2778, 0.2857,
//     0.2937, 0.3016, 0.3095, 0.3175, 0.3254, 0.3333, 0.3413, 0.3492, 0.3571,
//     0.3651, 0.373, 0.381, 0.3889, 0.3968, 0.4048, 0.4127, 0.4206, 0.4286,
//     0.4365, 0.4444, 0.4524, 0.4603, 0.4683, 0.4762, 0.4841, 0.4921, 0.5, 0.5079,
//     0.5159, 0.5238, 0.5317, 0.5397, 0.5476, 0.5556, 0.5635, 0.5714, 0.5794,
//     0.5873, 0.5952, 0.6032, 0.6111, 0.619, 0.627, 0.6349, 0.6429, 0.6508,
//     0.6587, 0.6667, 0.6746, 0.6825, 0.6905, 0.6984, 0.7063, 0.7143, 0.7222,
//     0.7302, 0.7381, 0.746, 0.754, 0.7619, 0.7698, 0.7778, 0.7857, 0.7937,
//     0.8016, 0.8095, 0.8175, 0.8254, 0.8333, 0.8413, 0.8492, 0.8571, 0.8651,
//     0.873, 0.881, 0.8889, 0.8968, 0.9048, 0.9127, 0.9206, 0.9286, 0.9365,
//     0.9444, 0.9524, 0.9603, 0.9683, 0.9762, 0.9841, 0.9921, 1,
//   ];

//   const canvas = document.querySelector("canvas");
//   const canvas_2 = document.querySelector("canvas_2");

//   //Main display canvas
//   const ctx = canvas.getContext("2d");
//   //Hidden canvas
//   const ctx_2 = canvas_2.getContext("2d");

//   canvas.width = 550;
//   canvas.height = 550;

//   const mobile =
//     navigator.userAgent.match(/Android/i) ||
//     navigator.userAgent.match(/webOS/i) ||
//     navigator.userAgent.match(/iPhone/i) ||
//     //|| navigator.userAgent.match(/iPad/i)
//     navigator.userAgent.match(/iPod/i) ||
//     navigator.userAgent.match(/BlackBerry/i) ||
//     navigator.userAgent.match(/Windows Phone/i);

//   const width = 300;
//   const height = 300;
//   const TWO_PI = 2 * Math.PI;
//   const scale = canvas.width / width;

//   const u_ = [];
//   const v_ = [];
//   const u_old_ = [];
//   const v_old_ = [];
//   const dens_ = [];
//   const dens_old_ = [];

//   const iterations = 3;
//   const dt_ = 0.0001;
//   const diff_ = 0.0;
//   const visc_ = 0.0;
//   const radius = 1;
//   const strength = 100;

//   const t = 0;

//   const animate = true;
//   const circle = true;
//   const add_velocity = true;
//   const add_density = true;

//   const minlet = 0;
//   const maxlet = 100;

//   const velocity = false;
//   const density = true;
//   const hwidth = canvas.width / 2;
//   const hheight = canvas.height / 2;

//   useEffect(() => {

//     if (mobile) {
//       width = 100;
//       height = 100;
//       canvas.width = 300;
//       canvas.height = 300;
//     }

//     //Half width and half height for displaying image centrally

//     canvas_2.width = canvas.width;
//     canvas_2.height = canvas.height;

//     if (mobile) {
//       strength = 50;
//     }

//     let clear_button = {
//       clear: function () {
//         clear();
//         iterations = 3;
//         radius = 1;
//         strength = 100;
//         if (mobile) {
//           strength = 50;
//         }
//       },
//     };

//     let gui = new dat.GUI();
//     console.log(dat, gui, "gui");
//     gui.add(this, "circle");
//     gui.add(this, "iterations").min(1.0).max(5.0).step(1.0).listen();
//     gui
//       .add(this, "density")
//       .listen()
//       .onChange((value) => {
//         velocity = false;
//         density = true;
//       });
//     gui
//       .add(this, "velocity")
//       .listen()
//       .onChange((value) => {
//         density = false;
//         velocity = true;
//       });
//     gui.add(this, "add_density");
//     gui.add(this, "add_velocity");
//     gui.add(this, "radius").min(1.0).max(10.0).step(1.0).listen();
//     gui.add(this, "strength").min(1.0).max(1000.0).step(10.0).listen();
//     gui.add(this, "visc_").min(0.0).max(1.0).step(0.0001).listen();
//     gui.add(this, "diff_").min(0.0).max(1.0).step(0.0001).listen();
//     gui.add(clear_button, "clear");

//     gui.close();
//   }, []);

//   const clear = () => {
//     for (let i = 0; i < (width + 2) * (height + 2); i++) {
//       u_[i] = 0;
//       v_[i] = 0;
//       u_old_[i] = 0;
//       v_old_[i] = 0;
//       dens_[i] = 0;
//       dens_old_[i] = 0;
//     }
//   };

//   const IX = (i, j) => {
//     return j * width + i;
//   };

//   const set_bnd = (b, x) => {
//     for (i = 1; i <= height; i++) {
//       x[IX(0, i)] = 0;
//       x[IX(width + 1, i)] = 0;

//       x[IX(i, 0)] = 0;
//       x[IX(i, width + 1)] = 0;
//     }

//     x[IX(0, 0)] = 0.5 * (x[IX(1, 0)] + x[IX(0, 1)]);
//     x[IX(0, width + 1)] = 0.5 * (x[IX(1, width + 1)] + x[IX(0, height)]);
//     x[IX(width + 1, 0)] = 0.5 * (x[IX(width, 0)] + x[IX(width + 1, 1)]);
//     x[IX(width + 1, height + 1)] =
//       0.5 * (x[IX(width, height + 1)] + x[IX(width + 1, width)]);
//   };

//   const diffuse = (b, x, x0, diff, dt) => {
//     //Diffusion rate
//     var a = dt * diff * width * width;

//     for (k = 0; k < iterations; k++) {
//       for (i = 1; i <= width; i++) {
//         for (j = 1; j <= height; j++) {
//           x[IX(i, j)] =
//             (x0[IX(i, j)] +
//               a *
//                 (x[IX(i - 1, j)] +
//                   x[IX(i + 1, j)] +
//                   x[IX(i, j - 1)] +
//                   x[IX(i, j + 1)])) /
//             (1 + 4 * a);
//         }
//       }
//       set_bnd(b, x);
//     }
//   };

//   const advect = (b, d, d0, u, v, dt) => {
//     var i0, j0, i1, j1;
//     var x, y, s0, t0, s1, t1, dt0;
//     dt0 = dt * width;

//     for (i = 1; i <= width; i++) {
//       for (j = 1; j <= height; j++) {
//         x = i - dt0 * u[IX(i, j)];
//         y = j - dt0 * v[IX(i, j)];

//         if (x < 0.5) {
//           x = 0.5;
//         }

//         if (x > width + 0.5) {
//           x = width + 0.5;
//         }

//         i0 = x << 0;
//         i1 = i0 + 1;

//         if (y < 0.5) {
//           y = 0.5;
//         }

//         if (y > height + 0.5) {
//           y = height + 0.5;
//         }

//         j0 = y << 0;
//         j1 = j0 + 1;

//         s1 = x - i0;
//         s0 = 1 - s1;
//         t1 = y - j0;
//         t0 = 1 - t1;

//         d[IX(i, j)] =
//           s0 * (t0 * d0[IX(i0, j0)] + t1 * d0[IX(i0, j1)]) +
//           s1 * (t0 * d0[IX(i1, j0)] + t1 * d0[IX(i1, j1)]);
//       }
//     }
//     set_bnd(b, d);
//   };

//   const project = (u, v, p, div) => {
//     var h;
//     h = 1.0 / width;
//     for (i = 1; i <= width; i++) {
//       for (j = 1; j <= height; j++) {
//         div[IX(i, j)] =
//           -0.5 *
//           h *
//           (u[IX(i + 1, j)] -
//             u[IX(i - 1, j)] +
//             v[IX(i, j + 1)] -
//             v[IX(i, j - 1)]);
//         p[IX(i, j)] = 0;
//       }
//     }

//     set_bnd(0, div);
//     set_bnd(0, p);
//     for (k = 0; k < iterations; k++) {
//       for (i = 1; i <= width; i++) {
//         for (j = 1; j <= height; j++) {
//           p[IX(i, j)] =
//             (div[IX(i, j)] +
//               p[IX(i - 1, j)] +
//               p[IX(i + 1, j)] +
//               p[IX(i, j - 1)] +
//               p[IX(i, j + 1)]) /
//             4;
//         }
//       }
//       set_bnd(0, p);
//     }
//     for (i = 1; i <= width; i++) {
//       for (j = 1; j <= height; j++) {
//         u[IX(i, j)] -= (0.5 * (p[IX(i + 1, j)] - p[IX(i - 1, j)])) / h;
//         v[IX(i, j)] -= (0.5 * (p[IX(i, j + 1)] - p[IX(i, j - 1)])) / h;
//       }
//     }
//     set_bnd(1, u);
//     set_bnd(2, v);
//   };

//   const vel_step = (u, v, u0, v0, visc, dt) => {
//     var tmp = u0;
//     u0 = u;
//     u = tmp;
//     diffuse(1, u, u0, visc, dt);
//     tmp = v0;
//     v0 = v;
//     v = tmp;
//     diffuse(2, v, v0, visc, dt);
//     project(u, v, u0, v0);
//     tmp = u0;
//     u0 = u;
//     u = tmp;
//     tmp = v0;
//     v0 = v;
//     v = tmp;
//     advect(1, u, u0, u0, v0, dt);
//     advect(2, v, v0, u0, v0, dt);
//     project(u, v, u0, v0);
//   };

//   const dens_step = (x, x0, u, v, diff, dt) => {
//     var tmp = x0;
//     x0 = x;
//     x = tmp;
//     diffuse(0, x, x0, diff, dt);
//     tmp = x0;
//     x0 = x;
//     x = tmp;
//     advect(0, x, x0, u, v, dt);
//   };

//   const disturb_u = (x, y, strength) => {
//     for (j = y - radius; j < y + radius; j++) {
//       for (k = x - radius; k < x + radius; k++) {
//         if (
//           j > radius &&
//           j < height - radius &&
//           k > radius &&
//           k < width - radius
//         ) {
//           u_[j * width + k] += strength;
//         }
//       }
//     }
//   };

//   const disturb_v = (x, y, strength) => {
//     for (j = y - radius; j < y + radius; j++) {
//       for (k = x - radius; k < x + radius; k++) {
//         if (
//           j > radius &&
//           j < height - radius &&
//           k > radius &&
//           k < width - radius
//         ) {
//           v_[j * width + k] += strength;
//         }
//       }
//     }
//   };

//   var plot_rgba = [];
//   plot_rgba = ctx_2.getImageData(0, 0, width, height);
//   var ncol = 500;

//   const prep_colours = () => {
//     for (i = 0; i < ncol; i++) {
//       red[i] = (red[i] * 255) << 0;
//       grn[i] = (grn[i] * 255) << 0;
//       blu[i] = (blu[i] * 255) << 0;
//     }
//   };

//   const draw_texture = () => {
//     var value;
//     for (x = 0; x < width + 2; x++) {
//       for (y = 0; y < height + 2; y++) {
//         var i = y * width + x;
//         if (velocity) {
//           value = Math.abs(Math.sqrt(u_[i] * u_[i] + v_[i] * v_[i]));
//         }
//         if (density) {
//           value = dens_[i];
//         }
//         frac = (value - minvar) / (maxvar - minvar);
//         frac = frac < 0.01 ? 0.01 : frac;
//         frac = frac > 0.99 ? 0.99 : frac;
//         icol = (frac * ncol) << 0;

//         var pxl = (x + y * width) << 2;
//         var pos = (x / (height / 100)) * (255 / 100);
//         plot_rgba.data[pxl] = red[icol];
//         plot_rgba.data[pxl + 1] = grn[icol];
//         plot_rgba.data[pxl + 2] = blu[icol];
//         plot_rgba.data[pxl + 3] = 255;
//       }
//     }
//   };

//   var x_old = -1;
//   var y_old = -1;
//   //When mouse leaves window, animate a circle
//   const animate_ = () => {
//     animate = true;
//     x_old = -1;
//     y_old = -1;
//   };

//   const mouse_enter = () => {
//     x_old = -1;
//     y_old = -1;
//   };

//   var click = false;
//   const mouse_up = (event) => {
//     click = false;
//     x_old = -1;
//     y_old = -1;
//   };
//   const mouse_down = (event) => {
//     click = true;
//     if (add_density) {
//       x = Math.round((event.offsetX - (canvas.width / 2 - hwidth)) / scale);
//       y = Math.round((event.offsetY - (canvas.height / 2 - hheight)) / scale);
//       add_density_(x, y, strength);
//     }
//   };

//   //Increase density within a radius of a specified location
//   const add_density_ = (x, y, strength) => {
//     for (var j = y - radius; j < y + radius; j++) {
//       for (var k = x - radius; k < x + radius; k++) {
//         if (
//           j > radius &&
//           j < height - radius &&
//           k > radius &&
//           k < width - radius
//         ) {
//           dens_[j * width + k] += strength;
//         }
//       }
//     }
//   };
//   const disturbLine = (x_new, y_new) => {
//     //Bresenham's line algorithm
//     //https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript
//     var dx = Math.abs(x_old - x_new);
//     var dy = Math.abs(y_old - y_new);
//     var sx = Math.sign(x_old - x_new);
//     var sy = Math.sign(y_old - y_new);
//     var err = dx - dy;

//     var x = x_new;
//     var y = y_new;

//     if (x_old > -1 && y_old > -1) {
//       while (true) {
//         if (add_density) {
//           add_density_(x, y, strength);
//         }
//         if (add_velocity) {
//           disturb_u(x, y, strength * (x - x_old));
//           disturb_v(x, y, strength * (y - y_old));
//         }

//         if (x == x_old && y == y_old) {
//           break;
//         }
//         var e2 = err << 1;
//         if (e2 > -dy) {
//           err -= dy;
//           x += sx;
//         }
//         if (e2 < dx) {
//           err += dx;
//           y += sy;
//         }
//       }
//     } else {
//       if (add_density) {
//         add_density_(x, y, strength);
//       }
//     }
//   };
//   const mouse_track = (event) => {
//     animate = false;
//     if (click) {
//       x_new = Math.round((event.offsetX - (canvas.width / 2 - hwidth)) / scale);
//       y_new = Math.round(
//         (event.offsetY - (canvas.height / 2 - hheight)) / scale
//       );
//       disturbLine(x_new, y_new);
//       x_old = x_new;
//       y_old = y_new;
//     }
//   };
//   canvas.addEventListener("mouseenter", mouse_enter);
//   canvas.addEventListener("mousedown", mouse_down);
//   canvas.addEventListener("mouseup", mouse_up);
//   canvas.addEventListener("mousemove", mouse_track);
//   canvas.addEventListener("mouseleave", animate_);

//   const getPos = (canvas, evt) => {
//     var rect = canvas.getBoundingClientRect();
//     return {
//       x: evt.touches[0].clientX - rect.left,
//       y: evt.touches[0].clientY - rect.top,
//     };
//   };
//   canvas.addEventListener("touchstart", touch_start);
//   canvas.addEventListener("touchend", animate_);
//   canvas.addEventListener("touchcancel", animate_);
//   canvas.addEventListener("touchmove", touch_move);

//   const touch_start = (event) => {
//     event.preventDefault();
//     animate = false;
//     x_old = -1;
//     y_old = -1;
//     x = Math.round(
//       (getPos(canvas, event).x - (canvas.width / 2 - hwidth)) / scale
//     );
//     y = Math.round(
//       (getPos(canvas, event).y - (canvas.height / 2 - hheight)) / scale
//     );
//     if (add_density) {
//       add_density_(x, y, strength);
//     }
//     x_old = x;
//     y_old = y;
//   };

//   const touch_move = (event) => {
//     event.preventDefault();
//     animate = false;
//     x_new = Math.round(
//       (getPos(canvas, event).x - (canvas.width / 2 - hwidth)) / scale
//     );
//     y_new = Math.round(
//       (getPos(canvas, event).y - (canvas.height / 2 - hheight)) / scale
//     );
//     disturbLine(x_new, y_new);

//     x_old = x_new;
//     y_old = y_new;
//   };

//   prep_colours();
//   clear();

//   //********** DRAW ***********
//   const draw = () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     if (animate && circle) {
//       t = (t + 0.1) % TWO_PI;
//       x_new = Math.round(width / 2 + (width / 4) * Math.cos(t));
//       y_new = Math.round(height / 2 + (height / 4) * Math.sin(t));
//       disturbLine(x_new, y_new);

//       x_old = x_new;
//       y_old = y_new;
//     }

//     vel_step(u_, v_, u_old_, v_old_, visc_, dt_);
//     dens_step(dens_, dens_old_, u_, v_, diff_, dt_);
//     draw_texture();
//     ctx_2.putImageData(plot_rgba, 0, 0);
//     //ctx.drawImage(canvas_2,0,0,width,height,0,0,canvas.width,canvas.height);
//     ctx.drawImage(
//       canvas_2,
//       0,
//       0,
//       width,
//       height,
//       window.innerWidth / 2 - hwidth,
//       window.innerHeight / 2 - hheight,
//       canvas_2.width,
//       canvas_2.height
//     );
//     window.requestAnimationFrame(draw);
//   };
//   draw();

//   return (
//     <div className="mouseFire">
//       <canvas id="canvas" width="0" height="0"></canvas>
//       <canvas id="canvas_2" width="0" height="0"></canvas>
//     </div>
//   );
// };

// export default MouseFire;
