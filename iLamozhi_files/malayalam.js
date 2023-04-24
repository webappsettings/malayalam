// -*- mode: java; -*-

// This file is part of Indian Language Converter

// Indian Language Converter is free software; you can redistribute it
// and/or modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2 of
// the License, or (at your option) any later version.

// Copyright (C) 2005, 2006 Vijay Lakshminarayanan <liyer.vijay@gmail.com>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License as
// published by the Free Software Foundation; either version 2 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301, USA.

// 	$Id: malayalam.js,v 1.6 2006-03-26 03:09:58 vijay Exp $	
// 	Author: Vijay Lakshminarayanan	
// 	$Date: 2006-03-26 03:09:58 $	
<!-- 	Modified: Anthony Deign adeign@gmail.com	 -->
<!-- 	$Date: 2006-Aug-15 02:44:19 $	 -->

var vowels = "(a(a|e|i|u)?)|(A|U|E|O|I|H)|(i(i)?)|(e(e|i)?)|(u(u)?)|(o(o|a|u)?)|(r~|r_|r |r`)|(R~|R_|R |R`)|(m_|m )|(n_|n )|(N_|N )|(l_|l )|(L_|L )|(_|~)"

var consonants = "(b(h)?)|(B(h)?)|(c(h(h)?)?)|(C(h)?)|(d(h)?)|(D(h)?)|(f|F)|(g(h)?)|(G)|(h)|(j(h)?)|(J(h)?)|(k(h)?)|(K)|(l)|(L)|(m|M)|(N(t)?)|(n(g|j|k|n|t(h)?)?)|(ph?)|(P)|(q)|(Q)|(r)|(R)|(s(h)?)|(S)|(t(t|h(h)?)?)|(T(h)?)|(v|V)|(w|W)|(x|X)|(y|Y)|(z(h)?)|(Z)"

var letter_codes = {
  "~a": "&#3333;",
  "~aa": "&#3334;", "~A": "&#3334;",
  "~i": "&#3335;",
  "~ee": "&#3336;", "~ii": "&#3336;", "~I": "&#3336;",
  "~u": "&#3337;",
  "~oo": "&#3338;", "~uu": "&#3338;", "~U": "&#3338;",
  "~r~": "&#3339;", "~R~": "&#3339;",
  "~e": "&#3342;",
  "~ae": "&#3343;", "~E": "&#3343;",
  "~ai": "&#3344;", "~ei": "&#3344;",
  "~o": "&#3346;",
  "~oa": "&#3347;", "~O": "&#3347;",
  "~au": "&#3348;", "~ou": "&#3348;",
  "~m_": "&#3330;", "~m ": "&#3330;&#160;", //anuswara
  "~H": "&#3331;",  //visarga
  "~n_": "&#3368;&#3405;&#8205;", "~n ": "&#3368;&#3405;&#8205;&#160;", //chillu
  "~N_": "&#3363;&#3405;&#8205;", "~N ": "&#3363;&#3405;&#8205;&#160;",
  "~l_": "&#3378;&#3405;&#8205;", "~l ": "&#3378;&#3405;&#8205;&#160;", 
  "~L_": "&#3379;&#3405;&#8205;", "~L ": "&#3379;&#3405;&#8205;&#160;",
  "~r_": "&#3376;&#3405;&#8205;", "~r ": "&#3376;&#3405;&#8205;&#160;", 
  "~R_": "&#3376;&#3405;&#8205;", "~R ": "&#3376;&#3405;&#8205;&#160;",
  "~_": "&#3405;&#8204;", //chandrakkala(Virama)
  "~~": "&#3405;&#8204;", //chandrakkala(Virama)
  "~r`": "&#3376;&#3405;&#8204;", //ra with anusvara
  "~R`": "&#3377;&#3405;&#8204;", //rra with anusvara
  
  "m_": "&#3330;",  "m ": "&#3330;&#160;&#8203;", //anuswara
  "H": "&#3331;",   //visarga
  "a": "",
  "*": "&#3405;",
  "aa": "&#3390;", "A": "&#3390;",
  "i": "&#3391;",
  "ee": "&#3392;", "ii": "&#3392;", "I": "&#3392;",
  "u": "&#3393;",
  "oo": "&#3394;", "uu": "&#3394;", "U": "&#3394;",
  "r~": "&#3395;", "R~": "&#3395;",
  "e": "&#3398;",
  "ae": "&#3399;", "E": "&#3399;",
  "ai": "&#3400;", "ei": "&#3400;",
  "o": "&#3402;",
  "oa": "&#3403;", "O": "&#3403;",
  "au": "&#3404;", "ou": "&#3404;",
  "n_": "&#3368;&#3405;&#8205;", "n ": "&#3368;&#3405;&#8205;&#160;", //chillu
  "N_": "&#3363;&#3405;&#8205;", "N ": "&#3363;&#3405;&#8205;&#160;", //chillu
   "l_": "&#3378;&#3405;&#8205;", "l ": "&#3378;&#3405;&#8205;&#160;", 
   "L_": "&#3379;&#3405;&#8205;", "L ": "&#3379;&#3405;&#8205;&#160;",
  "r_": "&#3376;&#3405;&#8205;", "r ": "&#3376;&#3405;&#8205;&#160;",
  "R_": "&#3376;&#3405;&#8205;", "R ": "&#3376;&#3405;&#8205;&#160;",
  "_": "&#3405;&#8204;", //chandrakkala(Virama)
  "~": "&#3405;&#8204;", //chandrakkala(Virama)
  "r``": "&#3376;&#3405;&#8204;", //ra with anusvara
  "R`": "&#3377;&#3405;&#8204;", //rra with anusvara

  "k": "&#3349;", "c": "&#3349;",
  "kh": "&#3350;", "q": "&#3350;", "Q": "&#3350;",
  "g": "&#3351;",
  "gh": "&#3352;",
  "ng": "&#3353;",
  "ch": "&#3354;", "C": "&#3354;",
  "chh": "&#3355;", "Ch": "&#3355;",
  "j": "&#3356;",
  "jh": "&#3357;",  "Jh": "&#3357;",
  "nj": "&#3358;",
  "T": "&#3359;",
  "Th": "&#3360;",
  "D": "&#3361;",
  "Dh": "&#3362;",
  "N": "&#3363;",
  "th": "&#3364;",
  "thh": "&#3365;",
  "d": "&#3366;",
  "dh": "&#3367;",
  "n": "&#3368;",
  "p": "&#3370;",
  "f": "&#3371;",  "ph": "&#3371;", "F": "&#3371;",
  "b": "&#3372;",
  "bh": "&#3373;",
  "m": "&#3374;",
  "y": "&#3375;",
  "r": "&#3376;",
  "l": "&#3378;",
  "v": "&#3381;",   "w": "&#3381;",
  "S": "&#3382;",   "z": "&#3382;",
  "sh": "&#3383;",
  "s": "&#3384;",
  "h": "&#3385;",
  "L": "&#3379;",
  "zh": "&#3380;",
  "R": "&#3377;",
  "mp": "&#3374;&#3405;&#3370;",
  "t": "&#3377;&#3405;&#3377;",
  "tt": "&#3359;&#3405;&#3359;",
  "nt": "&#3368;&#3405;&#3377;",
  "nth": "&#3368;&#3405;&#3364;",
  "nk": "&#3353;&#3405;&#3349;",
  "nn": "&#3368;&#3405;&#3368;",
  "Nt": "&#3363;&#3405;&#3359;",
  "B": "&#3372;&#3405;&#3372;",
  "G": "&#3351;&#3405;&#3351;",
  "J": "&#3356;&#3405;&#3356;",
  "K": "&#3349;&#3405;&#3349;",
  "M": "&#3374;&#3405;&#3374;",
  "P": "&#3370;&#3405;&#3370;",
  "V": "&#3381;&#3405;&#3381;", "W": "&#3381;&#3405;&#3381;",
  "x": "&#3349;&#3405;&#3383;", "X": "&#3349;&#3405;&#3383;",
  "Y": "&#3375;&#3405;&#3375;",
  "Z": "&#3382;&#3405;&#3382;"
  }

