import{a2 as e,j as t,a3 as r}from"./index-66dd5fa2.js";const n=`# Docs\r
\r
### Math\r
\r
The formulas used in this calculated were taken from [SDP-SI's formulas](https://www.sdp-si.com/Belt-Drive/Designing-a-miniature-belt-drive.pdf). Specifically, formulas 2, 3, and 5 are used.\r
\r
The first step is to take the user's desired center-center (C-C)\r
distance and calculate a hypothetical belt that would result in that\r
exact C-C distance. The measurement we are looking for here is known as\r
the **pitch length** of the belt (or the **datum length**). We do this by using formula 2. The derivation for this formula is actually some fairly [straightforward geometry](https://www.linearmotiontips.com/v-belt-pitch-length-datum-length/)!\r
\r
Suppose that we've now calculated our hypothetical belt to have a pitch length of 12.36 inches. We can convert a belt's pitch length to belt teeth by dividing the pitch length of the belt by the pitch of the belt. Typically in FRC, this is either 3mm or 5mm. Let's suppose its 3mm, or 0.11811 inches. 12.36 inches divided by 0.11811 inches is roughly 104.7 - so our hypothetical belt for our system to have the exact C-C we want has 104.7 teeth.\r
\r
Obviously, we can't have a belt with a fraction of a tooth, so we round this number to the nearest multiple of the user's \`Belt Tooth Increment\` input. Most belts from FRC vendors are sold with tooth counts in multiples of 5, but other belt manufacturers (such as BBMan) may also sell belts with tooth counts that are multiples of the pitch (in millimeters).\r
\r
The calculator outputs 2 options, rounding up and down to the nearest multiples, so that you can choose whether you want to go slightly shorter or slightly longer than your target C-C, depending on the constraints you're designing around.\r
\r
### [HTD vs GT2/3](https://www.sdp-si.com/D265/PDF/D265T003.pdf)\r
\r
HTD, or High Torque Drive, is a standard for a specific tooth shape on a timing belt. GT2 (Gates Tooth 2), sometimes referred to as PowerGrip GT2, is a secondary revision of HTD with a deeper tooth profile. HTD was developed in order to transmit high torque, but does not excel in high precision scenarios, as it inherently contains a sizeable amount of backlash. HTD and GT2 belts & pulleys are not recommended by Gates to be intermingled, due to load ratings, [but it's been done in FRC before](https://www.chiefdelphi.com/t/do-gt2-belts-work-on-htd-pulleys-reliably/148179), as not every subsystem may reach that load rating maximum.\r
\r
[GT3 is a further revision of GT2](https://www.sdp-si.com/products/GT-Timing-Belts-and-Pulleys.php), and GT3 belts work with GT2 pulleys seamlessly. GT3 offers a marginal increase in load capacity.\r
\r
###### URL Mirrors:\r
\r
- [Formulas](https://web.archive.org/web/20201022032018/https://www.sdp-si.com/Belt-Drive/Designing-a-miniature-belt-drive.pdf)\r
- [Pitch length formula derivation](https://web.archive.org/web/20200803213303/https://www.linearmotiontips.com/v-belt-pitch-length-datum-length/)\r
- [HTD vs GT2](https://web.archive.org/web/20210608142137/https://www.sdp-si.com/D265/PDF/D265T003.pdf)\r
- [Mixing HTD and GT2](https://web.archive.org/web/20210707201852/https://www.chiefdelphi.com/t/do-gt2-belts-work-on-htd-pulleys-reliably/148179)\r
- [GT3](https://web.archive.org/web/20210707192632/https://www.sdp-si.com/products/GT-Timing-Belts-and-Pulleys.php)\r
`,o=`# Docs\r
\r
##### Pistons & Pneumatic Cylinders\r
\r
The timeline shown in the graph is generated iteratively. We initially create a system with the user's inputted volume at 115psi. The system is then simulated over a length of 150 seconds, or an FRC match length.\r
\r
Each cylinder is **retracted by default**. It is then toggled every few seconds based on the \`Toggle State Every\` input. For example, if the input is \`8 s\`, then it will be extended 8 seconds into the match, retracted 16 seconds into the match, extended again 24 seconds into the match, and so on.\r
\r
Here is an image with labels for the corresponding specs of a pneumatic cylinder:\r
\r
todo: fixme\r
\r
I recommend watching [this video](https://www.youtube.com/watch?v=R-OBtVCPjMc) to get a brief understanding of how pneumatic cylinders work.\r
\r
##### Compressors\r
\r
The compressor will automatically enable below 95psi, and will automatically disable above 120psi.\r
\r
Compressors vary in performance based on the psi of the system they are feeding into. Their performance is typically measured in cubic feet per minute, or CFM. Vendors typically provide a table of CFM values at different pressures, eg CFM at 0psi, CFM at 10psi, etc.\r
\r
Note that this isn't a continuous range, so we need to run a polynomial regression on these values in order to generate a function that takes a given pressure and outputs a relatively correct CFM value. **This isn't perfect**, but it gets us a lot of the way there and can serve as a good estimate.\r
\r
Note that some of the compressors listed have 13.8V options - our systems run at 12V, not 13.8V. However, the data provided by the suppliers for those compressors did not include any data taken at 12V, with the exception of the VIAIR 90C being tested at 12V by AndyMark. If you are using one of the compressors that is only listed under 13.8V, you should compare the difference in performance between the VIAIR 90C at 12V and 13.8V and guesstimate how your system will perform under 12V rather than the calculated 13.8V.\r
\r
### Math\r
\r
##### Extension Force\r
\r
As the rear of cylinder fills with air, the force generated is equal to the total internal volume of the cylinder multiplied by the PSI, as the rod does not occupy any of the volume being expanded by the incoming air supply.\r
\r
\`\`\`\r
extensionForce = pressure * (π * (boreDiameter / 2)²)\r
\`\`\`\r
\r
##### Retraction Force\r
\r
As the front of the cylinder fills, there is a volume of the cylinder occupied by the rod, so the retraction force is slightly less than the extension force.\r
\r
\`\`\`\r
retractionForce = pressure * (π * ((boreDiameter / 2)² - (rodDiameter / 2)²))\r
\`\`\`\r
\r
##### Work\r
\r
Once we have the forces generated, we can calculate how much work each action requires to complete, which is simply \`force * distance\`, and in this case, distance is equal to the stroke length of the cylinder.\r
\r
##### Compressors\r
\r
Now that we have a function that estimates CFM at any given pressure (0-120psi for our systems), we can estimate how much work the compressor does in a given timeframe. Over a period of one second, a compressor will do \`cfmAtCurrentPressure * 1 second * 1 atmosphere\` joules of work. This comes from the formula for [pressure-volume work (PV work)](https://www.khanacademy.org/science/ap-chemistry/thermodynamics-ap/internal-energy-tutorial-ap/a/pressure-volume-work), where \`W = PV\`; \`V\` is equal to \`cfmAtCurrentPressure * 1 second\` and \`P\` is equal to 1 atmosphere (the external air pressure).\r
\r
##### Tying it together\r
\r
Note that we have work (in Joules) for both the cylinders and the compressor. Combining them will give us either a net positive work or a net negative work for the system over the last second. (Note that if a cylinder didn't extend or retract within the last second, the work that it did is simply 0.)\r
\r
Recall again the PV work formula, \`W = PV\`. Since we have the work in the system over the last second, and our volume is constant, we can calculate the pressure differential over the last second as simply \`P = W / V\`. Now, we can add this pressure differential to our system's pressure from one second ago, and we can then continue this for the full length of the matc.\r
\r
##### URL Mirrors\r
\r
- [PV work](https://web.archive.org/web/20201024100339/https://www.khanacademy.org/science/ap-chemistry/thermodynamics-ap/internal-energy-tutorial-ap/a/pressure-volume-work)\r
`,a=`# Docs\r
\r
This is essentially a direct port of [Julia's hooded flywheel calculator](https://www.chiefdelphi.com/t/flywheel-calculator/372836).\r
\r
This assumes the flywheel is connected to the shooter wheels directly, either coaxially, via gears, or via belts. This does not account for MOI of any pulleys, gears, or the DC motors themselves - just the shooter wheel(s) and flywheel(s).\r
\r
This also assumes the motor is outputting the maximum torque allowed by the current limit (i.e. at stall), and that you have a perfectly tuned controller. Your real windup time will be slightly longer than displayed.\r
\r
Note that the \`shooter max speed\` and \`target shooter RPM\` cannot be equal - the function to estimate windup time is not defined in this case (log of zero). If you want to get the motor to max possible speed, simply set the target RPM to 1 less than the max RPM.\r
\r
### Flywheel MOI\r
\r
Note that the flywheel MOI effective to the motors is multiplied by the gear ratio **squared**.\r
\r
Note the following:\r
\r
$$ K = \\frac{1}{2}Iw^2 $$\r
$$ I = \\frac{1}{2}mr^2 $$\r
\r
We can then substitute in $I$:\r
\r
$$ K = \\frac{1}{2} ( \\frac{1}{2} m\\_{fly} r\\_{fly}^2 ) w^2 $$\r
\r
However, note that $w$ should have our gear ratio $R$:\r
\r
$$ K = \\frac{1}{2} ( \\frac{1}{2} m_{fly} r_{fly}^2 ) (w\\_{wheel}R)^2 $$\r
\r
$$ \\text{Let} \\space I_{fly} = \\frac{1}{2} m_{fly} r\\_{fly}^2 R^2 $$\r
\r
$$ K_{fly} = \\frac{1}{2} I_{fly} w\\_{wheel}^2 $$\r
\r
As you can see, the MOI for a flywheel has a squared ratio term for the moment of inertia. Be careful to remember this in custom MOI calculations!\r
\r
### Spin-up time\r
\r
First, lets establish some variables:\r
\r
- $V_a$ - applied voltage (volts)\r
- $I$ - current (amps)\r
- $R$ - DC motor resistance (ohms)\r
- $T_{stall}$ - stall torque (newton meters)\r
- $J$ - moment of inertia of the system (in^2 lbs)\r
- $w$ - motor angular velocity (rpm)\r
- $w_{max}$ - motor free speed (rpm)\r
- $K_v$ - DC motor velocity constant (rpm/volt) = $w_{max}/12V$\r
- $K_t$ - DC motor torque constant (newton meters/amp) = $T_{stall}/(I_{stall}-I_{free})$\r
\r
Under a constant voltage, a DC motor follows the following equation\r
\r
$$\r
w = K_v V (1 - e^{(-t K_t) / {(JRK_v)}})\r
$$\r
\r
We need to rearrange this formula and solve for $t$. Doing so yields\r
\r
$$\r
t = -\\frac{JRK_v}{K_t}ln(-\\frac{w - VK_v}{VK_v})\r
$$\r
\r
Note the first term, $\\frac{JRK_v}{K_t}$. Let's cast aside the MOI $J$ for now and focus on $\\frac{RK_v}{K_t}$.\r
\r
We may notice that $R/K_t$ simplifies to $V/T_{stall}$. We can use that to further simplify to\r
\r
$$\r
\\frac{RK_v}{K_t} = \\frac{K_vV}{T_{stall}} = \\frac{\\frac{w_{max}}{V}V}{T_{stall}} = \\frac{w_{max}}{T_{stall}}\r
$$\r
\r
Note that $T_{stall}$ changes based on the current limit of the motor and the quantity of motors in the system. These constants are a lot easier to work with than $R$, $K_v$, and $K_t$, and our formula is now\r
\r
$$\r
t = -\\frac{Jw_{max}}{T_{stall}}ln(-\\frac{w - VK_v}{VK_v})\r
$$\r
\r
We can further simplify this by noting that $VK_v=w_{max}$:\r
\r
$$\r
t = -\\frac{Jw_{max}}{T_{stall}}ln(-\\frac{w - w_{max}}{w_{max}})\r
$$\r
\r
and distributing a negative sign:\r
\r
$$\r
t = -\\frac{Jw_{max}}{T_{stall}}ln(\\frac{w_{max} - w}{w_{max}})\r
$$\r
\r
And now we have a fairly approachable formula that we can use!\r
\r
### Other Math\r
\r
* $r_w$ = shooter wheel radius\r
* $w_w$ = shooter wheel RPM\r
* $V_w$ = shooter wheel surface speed\r
* $V_p$ = projectile speed\r
* $T$ = speed transfer percentage\r
* $J_w$ = Shooter wheel MOI\r
* $J_f$ = flywheel MOI\r
* $J_t$ = total MOI\r
* $m_p$ = projectile weight\r
\r
$$ J_t = J_w + J_f $$\r
$$ V_w = w_w * r_w $$\r
$$ T = \\frac{20 J_t}{7 m_p {\\frac{r_w}{2}}^{2} + 40 J_t} $$\r
$$ V_p = V_w * T $$\r
\r
\r
### Projectile Speed Estimation\r
\r
FRC Team 846 [derived some math](https://web.archive.org/web/20150920073053/https:/lynbrookrobotics.com/resourcefiles/whitepages/2012/Shooter%20Calculations%20Document.pdf) regarding this back in 2012.\r
\r
##### URL Mirrors:\r
\r
- [Julia's design calculator](https://web.archive.org/web/20210720015734/https://www.chiefdelphi.com/t/flywheel-calculator/372836)\r
- [FRC Team 846 speed transfer math](https://web.archive.org/web/20150920073053/https:/lynbrookrobotics.com/resourcefiles/whitepages/2012/Shooter%20Calculations%20Document.pdf)\r
`,s=`# Docs\r
\r
The time to goal currently **does not** account for deceleration of the arm when approaching the target. It **does** account for the initial acceleration from zero.\r
\r
The starting angle **must be less than** the ending angle.\r
\r
### Angles\r
\r
The angles follow the unit circle; i.e.:\r
\r
* Upright = 90°\r
* Parallel to ground = 0° (right) or 180° (left)\r
* Downwards = 270° or -90°\r
\r
For example:\r
\r
* 3/4 of a full rotation: start angle of 0°, end angle of 270°.\r
* 1/4 of a rotation downwards: start angle of 90°, end angle of 135°.\r
\r
### Math\r
\r
This arm calculator iteratively simulates arm states from the starting angle to the end angle. The algorithm is as follows:\r
\r
1. Set \`timeDelta = 0.0005 seconds\`. Set \`currentArmAngle = startingAngle\`. Set \`currentArmRpm = 0 rpm\`.\r
2. While \`currentArmAngle\` is less than \`endAngle\`:\r
3. Calculate the momentary downwards torque on the arm due to gravity.\r
4. Calculate the momentary net arm torque between the gravitational downwards torque and the motors at the current motor speed and current limit.\r
5. Calculate the momentary net arm angular acceleration, equal to the net arm torque divided by the arm's inertia.\r
6. Add the momentary net arm angular acceleration multiplied by \`timeDelta\` to \`currentArmRpm\`.\r
7. Add \`timeDelta * currentArmRpm + armAngularAccel * 0.5 * timeDelta²\` to \`currentArmAngle\`.\r
8. Set the current motor speed equal to the \`currentArmRpm\` multiplied by the gear ratio.\r
9. Go back to step 2.\r
\r
Steps 3-9 will only happen up to the iteration limit that you provide. That is, if iterationLimit is 5, that loop will only be executed 5 times. **If the iteration limit is too low, this may result in your arm not reaching your target angle at all!**\r
`,i=`# Docs\r
\r
This is a direct port of JVN's linear mechanism calculator. It does not account for acceleration or deceleration.\r
\r
### Math\r
\r
\r
`,h=e.memo(()=>t.jsx(r,{markdownContent:n})),c=e.memo(()=>t.jsx(r,{markdownContent:o})),m=e.memo(()=>t.jsx(r,{markdownContent:a})),d=e.memo(()=>t.jsx(r,{markdownContent:s})),u=e.memo(()=>t.jsx(r,{markdownContent:i}));export{d as A,h as B,m as F,u as L,c as P};
