#!/usr/bin/php
<?php

$i = 1;
$total = 0;

while ($i < 1000) {
    if ($i % 3 == 0)
        $total += $i;

    elseif ($i % 5 == 0)
        $total += $i;

    $i++;

}
echo $total;
