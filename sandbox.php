<?php
require __DIR__ . '/app/bootstrap.php';

class TestApp extends \Magento\Framework\App\Http implements \Magento\Framework\AppInterface
{
    public function launch()
    {
        $calculator = $this->_objectManager->create('Magento\Customer\Block\Account\Navigation');
        return $this->_response;
    }

    public function catchException(\Magento\Framework\App\Bootstrap $bootstrap, \Exception $exception)
    {
        return false;
    }
}

$bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $_SERVER);
$app = $bootstrap->createApplication('TestApp');
$bootstrap->run($app);